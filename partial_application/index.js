// Problem:
// - Fetch random users from Github API
// - Fetch random repos from Github API

//
// ---- Non-FP way ----
//
const fetch = require('node-fetch')
const baseURL = 'https://api.github.com'

const fetchGitHub = (url) => fetch(url).then(res => res.json()).catch(console.error)

// fetchGitHub(`${baseURL}/users`).then(users => users.forEach(user => console.log(user.login)))
// fetchGitHub(`${baseURL}/repositories`).then(repos => repos.forEach(repo => console.log(repo.html_url)))


//
// ---- FP way -----
//
/**
 * Curry function that takes in 1 argument at a time and return a new function
 * before applying the next argument to that function
 *
 * @param baseUrl
 * @returns {function(*): function(*): Promise<* | void>}
 */
const fetchFP = baseUrl => path => callback =>
    fetch(`${baseUrl}${path}`)
        .then(res => res.json())
        .then(data => callback(data))
        .catch(console.error)

/**
 * Utils function that map and log the mapping values
 *
 * @param fn
 * @returns {function(*): *}
 */
const mapAndLog = fn => mappable => mappable.map(item => {
    const val = fn(item)
    console.log(val)
    return val
})

/**
 * Partially applied function with "baseURL" fixed in the closure scope
 *
 * @type {function(*): function(*): Promise<* | void>}
 */
const fetchGitHubFP = fetchFP(baseURL)

/**
 * Partially applied function with "baseURL" and "path" fixed in the closure scope
 * @type {function(*): Promise<*|void>}
 */
const fetchUsers = fetchGitHubFP('/users')

/**
 * Partially applied function with "baseURL" and "path" fixed in the closure scope
 * @type {function(*): Promise<*|void>}
 */
const fetchRepos = fetchGitHubFP('/repositories')

const mapToLoginName = (users) => mapAndLog(user => user.login)(users)
void fetchUsers(mapToLoginName)

const mapToRepoUrl = (repos) => mapAndLog(repo => repo.html_url)(repos)
void fetchRepos(mapToRepoUrl)


