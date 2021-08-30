## Curry function
> A curried function is a function that takes multiple arguments one at a time.

So instead of:
```javascript
const calSum = (a, b) => a + b
```

Here is the currying version of above function:
```javascript
const calSum = a => {
    return b => {
        return a + b
    }
}

// More concise version in ES6
const calSumES6 = a => b => a + b
```

The currying function `calSum` above returns a function that accept only 1 argument - a _unary_ function.


## Resources
https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983
