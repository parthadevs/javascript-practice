// backslash escape character (',",\)
let text1 = "My name is \'Partha\' Sarker.";
let text2 = "My name is \"Partha\" Sarker.";
let text3 = "My name is \\Partha\\ Sarker.";
console.log(text1);
console.log(text2);
console.log(text3);
// others valid escape sequences are \b,\f,\n,\r,\t,\v


let x = new String("partha");
let y = new String("partha");
console.log(x == y); // retuen false because comparing two js object always false

let a = "partha";
let b = new String("Partha")
console.log(a == b); // retuen true
console.log(a === b); // return false because both type are different string and object

