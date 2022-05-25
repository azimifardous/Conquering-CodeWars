// Write a function which calculates the average of the numbers in a given list.
const find_average = arr => {
    return (arr.length == 0) ? 0 : arr.reduce((num, ind) => num + ind, 0) / arr.length;
};

console.log(find_average([10, 20, 30]));