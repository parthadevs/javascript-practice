let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length; // return length of a string

console.log("String Length :", length);
console.log(text.at(3)); // returns the character at a specified index in a string
console.log(text.charAt(3)); // returns the character at a specified index in a string
console.log(text[3]); // returns the character at a specified index in a string
console.log(text.charCodeAt(3)); // returns a UTF-16 code between 0 and 65535
console.log(text.codePointAt(3)); // retuen code point value


console.log("My name is" + " " + "Partha Sarker");

let firstName = "Partha"
let lastName = "sarker"
let age = 23
console.log("My name is "+  firstName.concat(" ",lastName, " ", "And i am", " " ,age , " ", "years old" ));

// Extracting string parts
let text2 = "Javascript Programming"
// JavaScript counts positions from zero.
console.log(text2.slice(0,10)); // return Javascript 
console.log(text2.slice(0,4));  // return Java
console.log(text2.slice(4,10));  // return script

// omit the second parameter slice(11) => start sliceing form index 11 to end
console.log(text2.slice(11)); // return Programming

console.log(text2.slice(-11)); // return Programming, now position is counted from the end of the string
console.log(text2.slice(11 , -4)); // return Program
console.log(text2.substring(0,10)); // start and end values must less than 0



// Converting to upper and lower case
console.log(text2.toLowerCase());
console.log(text2.toUpperCase());
console.log(text2.isWellFormed());

let text3 = "      Hello World!";
console.log(text3.trim());

// Javascript string repeat() mathod
let text4 = "hi ";
console.log(text4.repeat(4)); // return hi hi hi hi

// Replacing string content
let text5 = "I am an doctor"
console.log(text5.replace("doctor", "engineer"));
// By default the replace() method is case sensitive and replaces only the first
// To replace case insensitive or global match use a regular expression with /i or /g flag

// JavaScript string split()
let text6 = "My name is partha sarker,I am 23 years old."
console.log(text6.split(","));
console.log(text6.split(" "));
console.log(text6.split("."));