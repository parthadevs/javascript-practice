const fruits = ["apple", "banana", "orange", "mango", "kiwi"];

// push() 
fruits.push("orange");
console.log(fruits) // [ 'apply', 'banana', 'orange' ]

// pop()
fruits.pop()
console.log(fruits); // [ 'apply', 'banana' ]

// unshift()
fruits.unshift("pineapple")
console.log(fruits); // [ 'pineapple', 'apply', 'banana' ]

// shift()
fruits.shift()
console.log(fruits); // [ 'apply', 'banana' ]

// note : push() and unshift() method add maltiple elements but shift() and pop() remove only one eleemnts;


// indexOf()
console.log(fruits.indexOf("banana")); // 1
console.log(fruits.indexOf("pineapple")); // -1


let numbers = [10, 20, 30, 20, 40];
let index = numbers.indexOf(20);
console.log(index);

const fruitsA = ["apple", "banana", "orange", "mango", "kiwi"];

//let removed = fruitsA.splice(0, 2);

console.log(fruitsA);  // ["apple", "banana", "kiwi"]
//console.log(removed); // ["orange", "mango"

// let arr = [1, 2, 3, 4, 5];
// arr.splice(2, 0, 6, 7);
// console.log(arr);

// includes()
console.log(fruitsA.includes("apple")); // return true
console.log(fruitsA.includes("xyz")); // return false

// let arr = [1, "2", 3, "4", 5];
// console.log(arr.includes("3"));

const colors = ["red", "blue", "green", "yellow"];
colors.splice(1, 2, "purple");
console.log(colors);

const arr = ["apple", "banana", "cherry", "date"];
const slicedArr = arr.slice(1, 3);
console.log(slicedArr);

const emptyArr = [];
console.log(emptyArr.shift());