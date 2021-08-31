# Function composition
We can write a function that compose many other functions. Output of 1 function will be the input of the next one.

Example:
```javascript
const addOne = x => x + 1
const multipleTwo = x => x * 2
const compose = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x)


const mathComposition = compose(addOne, multipleTwo)
mathComposition(2) // -> (2 + 1) * 2 = 6
```

More detailed, FP-style example could be found in [index.js](./index.js)