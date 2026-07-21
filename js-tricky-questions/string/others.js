// The Array Addition Magic
console.log("Result: " + [1, 2] + [3, 4]);


// The Decrement Surprise
console.log("10" - "5");
console.log("10" - "five");

// Object as a Key
let obj = {};
let str = "name";
let objKey = { key: "value" };

obj[str] = "JavaScript";
obj[objKey] = "Advanced";

console.log(obj["[object Object]"]);

// The Reverse Challenge
let text = "banana";
console.log(text.replace("a", "x")); 

// The String Object Comparison
let str1 = "hello";
let str2 = new String("hello");

let ans1 = (str1 == str2);
let ans2 = (str1 === str2);
console.log(ans1, ans2);

// Floating Point to String
let num = 0.1 + 0.2;
console.log(num.toString());

// The NaN Comparison
let sd = "Hello" / 2;

console.log(sd == NaN);
console.log(sd === NaN);

// The charCodeAt vs codePointAt

let emoji = "🚀";
console.log(emoji.charCodeAt(0));
console.log(emoji.codePointAt(0));

// Slicing with Negative Indexes
let texfsdt = "Developer";
console.log(texfsdt.slice(-5, -2));

// The trim() Mechanism
let name = "  Alex  ";
name.trim();
console.log(name.length);

// String Interpolation Trick

let user = { name: "Rahim" };
console.log(`Welcome ${user}`);


// The parseInt with Radix

console.log(parseInt("101", 2));
console.log(parseInt("8", 8));

// The Double NOT (!!) on Empty String

console.log(!!"", !!" ");

// Local Comparison
console.log("ä" > "z"); 


// The split() Limit
let tags = "js,react,node,next";
console.log(tags.split(",", 2));

// The valueOf() Method
let strObj = new String("Core JS");
console.log(strObj.valueOf());

let tex1t = "test1 test2";
console.log(tex1t.match(/test/));