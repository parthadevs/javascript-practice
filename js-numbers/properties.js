// Javascript Number properties

// isFinite()
// if number is Infinity,-Infinity,NaN or String then retuen false otherwise its return true 
let number = 1000; 
console.log(Number.isFinite(number)); // true

// isInteger()
// without valid integer always return false
console.log(Number.isInteger(5/2)); // retuen false
console.log(Number.isInteger(5)); // retuen true


// isNaN()
// NaN (not a number)
let nNumber = NaN;
console.log(Number.isNaN(nNumber)); // retuen true

// isSafeInteger()
// only true when number is safe
// safe integers from (2^53 - 1) to -(2^53 - 1).
let safeIntNumber = 1000
console.log(Number.isSafeInteger(safeIntNumber));

// prototype
// Number.prototype.name = value
Number.prototype.floatSum = function (num) {
    return this + num;
};

let x = 0.1
let y = 0.2

console.log(x.floatSum(y)); 

// toLocalString()
// number.toLocaleString(locales, options)
let tlsNumber = 100000;
console.log(tlsNumber.toLocaleString("en-US",{
    style : "currency",
    currencyDisplay : "name",
    currency : "USD"
}));

