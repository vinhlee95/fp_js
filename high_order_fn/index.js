/**
 * High order functions
 * - Accept fn as argument
 * - Return a new fn
 */
const callWithCount = (fn) => {
    let count = 0

    return (...args) => {
        count += 1
        console.log(`Call function: ${count}`)

        return fn(...args)
    }
}


const addFn = (x, y) => x + y
const callAddFnWithCount = callWithCount(addFn)

callAddFnWithCount(1, 2)
callAddFnWithCount(3, 4)


/**
 * isGreaterThan HOF
 * Return a function that does the actual comparison
 *
 * @param numberToCompare
 * @returns {function(*): boolean}
 */
const isGreaterThan = (numberToCompare) => {
    return (val) => val > numberToCompare
}

const isGreaterThan10 = isGreaterThan(10)
console.log(isGreaterThan10(11))
console.log(isGreaterThan10(1))

/**
 * HOF returns a function where we filter an arr
 *
 * @param val
 * @returns {function(*): *}
 */
const filterGreaterThan = (val) => {
    return (arr) => arr.filter(item => item > val)
}

const filterGreaterThan10 = filterGreaterThan(10)
const arr = [1, 3, 10, 12, 14]
console.log(filterGreaterThan10((arr)))

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

console.log(filterByAction(arr, val => val > 10))


