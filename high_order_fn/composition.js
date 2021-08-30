/**
 * This module shows hows HOF shines in composition.
 * Instead of housing all logic inside a big function, we split them into smaller, "pure" functions
 * where each of them does ONLY 1 specific thing.
 */

const grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]

const map = (fn) => (mappable) => mappable.map(fn)
const calculateTotal = (arr) => arr.reduce((a, b) => a + b, 0)
const toGrade = (item) => item.grade
const mapToGrade = map(toGrade)

const calculateAverage = (arr, action) => {
    const arrToCalculate = action && typeof action === 'function' ? arr.filter(action) : arr
    return calculateTotal(mapToGrade(arrToCalculate)) / arrToCalculate.length
}

// The average grade of this classroom
const avgGradeOfAll = calculateAverage(grades)
console.log({avgGradeOfAll})

// The average grade of the boys
const isBoy = item => item.sex === 'M'
const avgGradeOfBoys = calculateAverage(grades, isBoy)
console.log({avgGradeOfBoys})

// The average grade of the girls
const isGirl = item => item.sex === 'F'
const avgGradeOfGirls = calculateAverage(grades, isGirl)
console.log({avgGradeOfGirls})