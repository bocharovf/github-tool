import { StarFilter } from './StarFilter';

/**
 * Encapsulates request parameters
 */
export class GithubRequest {

    constructor(public language:string, public starFilter:StarFilter, public pushDate:Date) {

    }
};
