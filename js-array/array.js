// Array Destructuring

let fruitsArray = ["apple", "banana", "orange"];

//let [first, second, third] = fruitsArray;

// console.log(first);  // "apple"
// console.log(second); // "banana"
// console.log(third);  // "orange"

let colors = ["red", "green", "blue", "yellow"];
let [firstColor, , thirdColor] = colors;

console.log(firstColor); // "red"
console.log(thirdColor); // "blue"

let fruitsA = ["apple", "banana", "orange", "mango", "kiwi"];
let [first, second, ...rest] = fruitsA;

console.log(first);  // "apple"
console.log(second); // "banana"
console.log(rest);   // ["orange", "mango", "kiwi"]


let str = "partha sarker"
console.log(str.split("").reverse().join("")); // return reverse string of str