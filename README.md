Node.js tool to collect programming language usage statistics from GitHub. It tries to calculate amount of repositories that use particular programming language.

# Reason
It intented to collect data on schedule and store it in Redis instance. Collected data will be used in job-tool project (see https://github.com/bocharovf/job-tool)

# How it works:
It performs 3 requests to GitHub API for each language specified in settings. 
Each request retrieve amount of repositories with particular amount of stars that use specific programming language. 

Currently it check repositories with: 
* zero stars (all)
* more than 100 stars (popular)
* more than 1000 stars (awesome)

Because of throttling requests are limited to 30 per minute. 
Having more than 400 languages, 3 requests per language and throttling gives us working time about 1 hour.

# Settings
List of languages specified in settings and copied from Github.
The tool relies on GITHIB_LOGIN and GITHUB_PWD environment variable to keep your GitHub account login and password. Authorisation is required to increase throttling limit.
Results are stored in Redis instance specified in settings.

# How to run
Use npm to run, build and debug.
```
npm start
npm run build
npm run live
```


