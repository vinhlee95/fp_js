# High-order functions (HOF)
HOF allow to abstract over _actions_ (functions), not just _values_.

## Example
```javascript
/**
 * This is an example of abstract over value, where we provide a val argument and check inside the fn 
 * whether that val is greater than 10
 * 
 * @param val
 * @returns {boolean}
 */
const isGreaterThan10 = (val) => val > 10


/**
 * Abstraction over actionm where we return a function
 * 
 * @param numberToCompare
 * @returns {function(*): boolean}
 */
const isGreaterThan = (numberToCompare) => {
    return (val) => val > numberToCompare
}

const isGreaterThan10 = isGreaterThan(10)
isGreaterThan10(11)
```

## Filtering array
```javascript
/**
 * An alternative to filterGreaterThan. Instead of returning a function, it accepts a function
 * and do the filtering based on given fn
 *
 * @param arr the array to filter through
 * @param action the function to validate whether an item in the array should pass
 * @returns {*}
 */
const filterByAction = (arr, action) => {
    return arr.filter(action)
}

filterByAction(arr, val => val > 10)
```


## Resources
https://eloquentjavascript.net/05_higher_order.html
https://dev.to/damcosset/higher-order-functions-in-javascript-4j8b
