/* Consider an array/list of sheep where some sheep may be missing from their place. 
We need a function that counts the number of sheep present in the array (true means present). */

const countSheeps = arrOfSheep => arrOfSheep.filter(Boolean).length;
console.log(countSheeps([true, true, false, true])); // 3