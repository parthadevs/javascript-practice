let str = "Javastript";
str.customProp = "🎯"; 
console.log(str.customProp); 

// output: undefined

/*
Explanation : Strings are a primitive data type in JavaScript (not objects). 
When you write str.customProp = "🎯", JavaScript temporarily converts that
string into an object (called a Wrapper Object) in the background, assigns 
the property, and immediately deletes that object from memory.
When you call str.customProp again on the next line, JavaScript 
creates a completely new Wrapper Object, which no longer contains the previous property. 
Hence the output is undefined.
*/