## Partial application
> A partial application is a function which has been applied to some, but not yet all of its arguments. In other words, it’s a function which has some arguments fixed inside its closure scope

See example at [index.js](./index.js)

`fetchFP` is a curry function. It takes in `baseUrl` argument and returns a _partially applied function_, `fetchGitHubFP`, with `baseUrl` is fixed in the closure scope. 

`fetchGitHubFP` also takes in `path` argument and returns new partially applied functions - `fetchUsers` and `fetchRepos`. They both take a callback as the argument and complete the program.


## Resources
https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983