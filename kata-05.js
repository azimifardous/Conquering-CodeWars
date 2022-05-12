/* Your task is to create the function isDivideBy (or is_divide_by) to 
check if an integer number is divisible by both integers a and b. */

const isDivideBy = (number, a, b) => {
    if (number % a === 0 && number % b === 0) {
        return true
    } else {
        return false
    }
}

console.log(isDivideBy(27, 2, 3)); // false
console.log(isDivideBy(27, 9, 3)); // true