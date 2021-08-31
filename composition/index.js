
const add = (val) => x => x + val
const multiply = (scale) => x => x * scale
const subtract = (val) => x => x - val

const addOne = add(1)
const multiplyTwo = multiply(2)
const subtractThree = subtract(3)

// Composition of 3 above functions
console.log(subtractThree(multiplyTwo(addOne(3))))

/**
 * Generic composition which takes in a number of functions as arguments
 * and execute them from right to left
 *
 * @param fns
 * @returns {function(*=): *}
 */
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x)
/**
 * Pipe composition, which is similar to above compose function
 * but executes arg fns from left to right
 *
 * @param fns
 * @returns {function(*=): *}
 */
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x)

const mathCompose = compose(subtractThree, multiplyTwo, addOne,)
const mathPipe = pipe(addOne, multiplyTwo, subtractThree)

console.log(mathCompose(3))
console.log(mathPipe(3))
