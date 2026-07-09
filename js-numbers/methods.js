// toString() Method 
// It take any type of number (literals, variables or expressions) and return string
console.log("---------- toString() ----------");
let n = 24;
console.log(typeof n); // number
console.log("literal :",(10).toString()); 
console.log("variable :", n.toString());
console.log("expression :", (10+10).toString());
// toString(optional radix argument) that convart the number into different base
console.log("Binary :",n.toString(2));
console.log("octal :" , n.toString(8));

// toExponential() Method
console.log("---------- toExponential() ----------");
let x = 9460730472580800;
console.log(x.toExponential(2)); // 9.46e+15
console.log(x.toExponential(4)); // 9.4607e+15
console.log(x.toExponential(6)); // 9.460730e+15


// The toFixed() Method
// its retuen string type
console.log("---------- toFixed() ----------");
let tf = 3.1416
console.log(tf.toFixed(2)); // 3.14
console.log(tf.toFixed(3)); // 3.141


// The toPrecision() method
console.log(tf.toPrecision(2)); // 3.141


// convarting variables to number methods
// Number(arg) retuen number 
let sn = "10";
console.log(Number(sn)); // return 10 type number

// parseFloat(arg) return floating point number
console.log(parseFloat("100"));

// parseInt(arg) retuen a whole number
console.log(parseInt(sn));


console.log(Number("32px"));       // NaN 
console.log(parseInt("32px", 10)); // 32 

console.log(Number("3.14"));  // 3.14
console.log(parseInt("3.14", 10));  // 3

console.log(Number(""));          // 0
console.log(parseInt("", 10));   // NaN

console.log(Number(true));       // 1
console.log(parseInt(true, 10));  // NaN 

console.log(Number(null));        // 0
console.log(parseInt(null, 10));  // NaN 

console.log(Number.parseFloat("10 years "));