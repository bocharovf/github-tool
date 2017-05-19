"use strict";
/**
 * Tool to collect repository language statistics from Github
 *
 * @author Bocharov Filipp <bocharovf@gmail.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
var es6promise = require("es6-promise");
es6promise.polyfill();
require("isomorphic-fetch");
var process = require("process");
var Redis = require("redis");
var Settings = require("./settings");
var GithubRequest_1 = require("./GithubRequest");
var StarFilter_1 = require("./StarFilter");
var login = process.env.GITHUB_LOGIN;
var pwd = process.env.GITHUB_PWD;
var AUTH_HEADER = 'Basic ' + new Buffer(login + ':' + pwd).toString('base64');
var client = Redis.createClient({
    host: Settings.REDIS_HOST,
    port: Settings.REDIS_PORT
});
var requestQueue = prepareRequests(Settings.languages);
var requestsTotal = requestQueue.length;
var startTime = new Date().getTime();
var requestsDone = 0;
processQueueItem(Settings.REQUEST_INTERVAL * 0.8); // empirical coefficient
/**
 * Prepare requests for each language
 * @param languages the list of languages to collect statistics for
 * @returns arrays of requests
 */
function prepareRequests(languages) {
    return languages
        .map(function (language) {
        return [
            new GithubRequest_1.GithubRequest(language, StarFilter_1.StarFilter.High, Settings.MIN_PUSH_DATE),
            new GithubRequest_1.GithubRequest(language, StarFilter_1.StarFilter.Medium, Settings.MIN_PUSH_DATE),
            new GithubRequest_1.GithubRequest(language, StarFilter_1.StarFilter.All, Settings.MIN_PUSH_DATE)
        ];
    })
        .reduce(function (a, b) { return a.concat(b); });
}
/**
 * Perform requests from queue one by one through interval
 * @param interval the interval in ms between requests
 */
function processQueueItem(interval) {
    var request = requestQueue.pop();
    if (!request)
        return;
    performRequest(request)
        .then(function (resp) {
        if (resp.status >= 400 && request) {
            requestQueue.push(request);
            throw new Error(resp.statusText);
        }
        return resp.json();
    })
        .then(function (data) {
        if (!request)
            return;
        var language = request.language, starFilter = request.starFilter;
        var key = "lang:" + language.toLowerCase() + ":" + starFilter;
        client.set(key, data.total_count);
        requestsDone++;
        setTimeout(function () { return processQueueItem(interval); }, interval);
    })
        .catch(function (error) {
        console.log(error);
        setTimeout(function () { return processQueueItem(interval); }, interval);
    });
}
/**
 * Perform request to Github based on language and stars amount
 * @param request the request parameter
 * @returns request promise
 */
function performRequest(request) {
    var elapsedSeconds = (new Date().getTime() - startTime) / 1000;
    console.log("#" + requestsDone + "/" + requestsTotal + "/" + elapsedSeconds + " ask for " + request.language + " with " + request.starFilter + " stars");
    var baseUrl = 'https://api.github.com/search/repositories';
    var language = encodeURIComponent(request.language);
    var pushed = request.pushDate.toISOString().slice(0, 10);
    var stars = request.starFilter;
    var size = Settings.MIN_REPOSITORY_SIZE;
    var url = baseUrl + "?q=language:" + language + "+pushed:>=" + pushed + "+stars:>=" + stars + "+size:>" + size + "&per_page=1";
    return fetch(url, {
        headers: {
            'User-Agent': 'job-tool-bot (contact bocharovf@gmail.com)',
            'Accept': 'application/json',
            'Authorization': AUTH_HEADER
        }
    });
}
