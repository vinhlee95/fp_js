/**
 * Normal add function that accept 2 arguments -> calculate total
 *
 * @param a
 * @param b
 * @returns {*}
 */
const add = (a, b) => a + b

/**
 * Currying add function where it returns a new function that takes in the next argument
 * @param a
 * @returns {function(*)}
 */
const curryingAdd = a => b => a + b
const curryingAddES5 = (a) => {
    return (b) => {
        return a + b
    }
}

console.log(curryingAdd(1)(2))