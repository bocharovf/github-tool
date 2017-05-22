/**
 * Tool to collect repository language statistics from Github
 * 
 * @author Bocharov Filipp <bocharovf@gmail.com>
 */

import * as es6promise from 'es6-promise';
es6promise.polyfill();

import 'isomorphic-fetch';
import * as process from 'process';
import * as Redis from 'redis';
import * as Settings from './settings';
import { GithubRequest } from './GithubRequest';
import { StarFilter } from './StarFilter';

const login = process.env.GITHUB_LOGIN;
const pwd = process.env.GITHUB_PWD;
const AUTH_HEADER = 'Basic ' + new Buffer(login + ':' + pwd).toString('base64');

const client = Redis.createClient({
    host: Settings.REDIS_HOST,
    port: Settings.REDIS_PORT
});

const requestQueue = prepareRequests(Settings.languages);
const requestsTotal = requestQueue.length;
const startTime = new Date().getTime();
let requestsDone = 0;

processQueueItem(Settings.REQUEST_INTERVAL * 0.8); // empirical coefficient

/**
 * Prepare requests for each language
 * @param languages the list of languages to collect statistics for
 * @returns arrays of requests
 */
function prepareRequests(languages: Array<string>) {
    return languages
                .map(language => {
                    return [
                        new GithubRequest(language, StarFilter.High, Settings.MIN_PUSH_DATE),
                        new GithubRequest(language, StarFilter.Medium, Settings.MIN_PUSH_DATE),
                        new GithubRequest(language, StarFilter.All, Settings.MIN_PUSH_DATE) 
                        ]
                    })
                .reduce( (a,b) => a.concat(b));
}

/**
 * Perform requests from queue one by one through interval
 * @param interval the interval in ms between requests
 */
function processQueueItem(interval: number) {
    let request = requestQueue.pop();
    if(!request) return;

    performRequest(request)
        .then(resp => {
            if (resp.status >= 400 && request) {
                requestQueue.push(request);
                throw new Error(resp.statusText);
            }
            
            return resp.json();
        })
        .then(data => {
            if (!request) return;

            let { language, starFilter } = request;
            let key = `lang:${language.toLowerCase()}:${starFilter}`; 
            client.set(key, data.total_count);
            requestsDone++;

            setTimeout( () => processQueueItem(interval), interval);
        })
        .catch( error => {
            console.log(error);
            setTimeout( () => processQueueItem(interval), interval);
        });
}

/**
 * Perform request to Github based on language and stars amount
 * @param request the request parameter  
 * @returns request promise
 */
function performRequest(request: GithubRequest) {
    let elapsedSeconds = (new Date().getTime() - startTime) / 1000;
    console.log(`#${requestsDone}/${requestsTotal}/${elapsedSeconds} ask for ${request.language} with ${request.starFilter} stars`);

    let baseUrl = 'https://api.github.com/search/repositories';
    let language = encodeURIComponent(request.language);
    let pushed = request.pushDate.toISOString().slice(0,10);
    let stars = request.starFilter;
    let size = Settings.MIN_REPOSITORY_SIZE;
    let url = `${baseUrl}?q=language:${language}+pushed:>=${pushed}+stars:>=${stars}+size:>${size}&per_page=1`;
    
    return fetch(url, {
        headers: {
            'User-Agent': 'job-tool-bot (contact bocharovf@gmail.com)',
            'Accept': 'application/json',
            'Authorization': AUTH_HEADER
         }
        });
}
