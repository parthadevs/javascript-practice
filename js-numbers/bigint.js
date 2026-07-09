// bigint create 
// Using an integer literal with an n suffix
// Using the BigInt() constructor with a string
// Numbers are only accurate up to 15 digits.
let bigIntWithSuffix = 999999999999999n;
let bitIntWithCon = BigInt(999999999999999);

console.log( bitIntWithCon);
console.log( bigIntWithSuffix);


// Arithmetic between BigInt and Number is not allowed (type error)
// to do this need to convart BitInt into number

let bitInt = 20n;
let nInt = 10;
// let t_result = bitInt + nInt; // type error
let result = Number(bitInt) + nInt;
console.log(result);


// comparison operators (<, > ==, ===, !==, <=, >=) BigInt support all
console.log(10n == 10); // retuen true
console.log(10n === 10); // retuen false bucause type different
console.log(5 > 10n); // false

// bitwise operators supports all but only BigInt and BigInt
let a = 5n; // 0101
let b = 3n; // 0011

let x = (a & b); // 1n (0001)
let y = (a | b); // 7n (0111)
let z = (a ^ b); // 6n (0110)
let n = (~a);    // -6n

// bitwise shift operators (<< and >> shift opperator only support)
let big = 10n; // binary: 1010

let leftShift = (big << 2n); // 40n (101000)
let sRightShift = (big >> 1n); // 5n (0101)

// bitint hax,binary and octal 
let num = 24n;
let oct = 0o400n;
let hex = 0x3000n;
let binary = 0b10001110n;