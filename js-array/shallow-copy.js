const originalArray = [1, 2, 3];
//const copyArray = [].concat(originalArray);
//const copyArray = originalArray.slice(); // create shallow copy
const copyArray = [...originalArray] // create shallow copy using spreads operator

copyArray.push(4)
console.log(copyArray); // [1, 2, 3,4]
console.log(originalArray); // [ 1, 2, 3 ]
console.log(copyArray === originalArray); // false
