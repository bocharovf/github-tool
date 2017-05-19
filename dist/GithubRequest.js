"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Encapsulates request parameters
 */
var GithubRequest = (function () {
    function GithubRequest(language, starFilter, pushDate) {
        this.language = language;
        this.starFilter = starFilter;
        this.pushDate = pushDate;
    }
    return GithubRequest;
}());
exports.GithubRequest = GithubRequest;
;
