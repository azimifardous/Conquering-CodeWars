/* Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number. */

const sumMix = (x) => {
    let sum = null;
    for (let i = 0; i < x.length; i++) {
        sum += Number(x[i]) // The Number() method convert any data type to number if it's not converted it returns NaN
    }
    return sum
}

console.log(sumMix([1, 4, "3", 5])); // 13