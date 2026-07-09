//Javascript search() indexOf() and lastIndexOf() methods retuen same value but there are some differences.
// [1]: The search(arg) method only take one argument.
// [2]: the indexOf(arg1,arg2) method cannot take powerful search values 
let text = "My name is partha sarker and my mother name is lakshmi rani sarker";
let fIndex = text.indexOf("partha");
let fwfin = text.indexOf("sarker",10);
let lIndex = text.lastIndexOf("partha")
console.log(fIndex);
console.log(lIndex);
console.log(fwfin);
console.log(text.search("partha"));

// String match() and matchAll() method
console.log(text.match(/name/gi)); // match perform globaly and case-insensitive using g and i flag

//let matchAll = text.matchAll(/name/g);
//console.log(Array.from(matchAll).length);

// includes(arg1,arg2) method (case sensitive)
console.log("includes(arg1):",text.includes("name")); // only use arg1 and arg2 default 0
console.log("includes(arg1,arg2):",text.includes("name",10));

// startsWith and endswith (searchString,position) method retuen boolen value | (case sensitive)
console.log("startswith output : ",text.startsWith("name"));
console.log("endsWith output : ",text.endsWith("name"));