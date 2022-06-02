/* Given an array of integers.
Return an array, where the first element is the count of positives 
numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array. */

const countPositivesSumNegatives = input => {
    if (input == null || input.length === 0) {
        return []
    } else {
        const countPositive = input.filter(number => number > 0).length;
        const sumNegative = input.filter(number => number < 0).reduce((pValue, cValue) => pValue + cValue);
        return [countPositive, sumNegative];
    }
};

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -10, -20])); // [10, -30]
