/* In this little assignment you are given a string of space 
separated numbers, and have to return the highest and lowest number. */

const highAndLow = numbers => {
    const numbersArr = numbers.split(" ").map(Number)
    return `${Math.max(...numbersArr)} ${Math.min(...numbersArr)}`
}

console.log(highAndLow("-9 42")) // "42 -9"