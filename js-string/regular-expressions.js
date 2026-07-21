// Regex is a sequence of characters that defines a specific search pattern

//Two ways to Create RegEx
const re1 = /ab+c/;
const re2 = new RegExp("ab+c");

// Importance Methods
const text = "My name is partha Sarker.I am 23 years old."

// test method
console.log("test : ",re1.test("abc"));

// match method
console.log("match : ",text.match(/is/));

// replace method
console.log("replace : ",text.replace(/23/g, "24"));

// search method
console.log("search : ",text.search(/name/));


// (.) Any single character
const regex1 = /c.t/;
const words1 = [
    "cat",
    "cut",
    "cot",
    "c9t",
    "cart",
    "ct"
];

// words1.forEach(word => {
//     console.log(word, "=>", regex1.test(word));
// });

// (*) Previous character 0 or more times
const regex2 = /ab*/;
const words2 = [
    "a",
    "ab",
    "abb",
    "abbbbb",
    "xc"
];

// words2.forEach(word => {
//     console.log(word, "=>", regex2.test(word));
// });


// (+) Previous character one or more times
const regex3 = /ab+/;
const words3 = [
    "a",
    "ab",
    "abb",
    "abbbbb",
    "ac"
];

// words3.forEach(word => {
//     console.log(word, "=>", regex3.test(word));
// });

// (?) Previous character optional
const regex4 = /colou?r/;
const words4 = [
    "color",
    "colour",
    "colouur",
    "colr"
];

// words4.forEach(word => {
//     console.log(word, "=>", regex4.test(word));
// });


// [] Match any one character inside []
const regex5 = /gr[ae]y/;
const words5 = [
    "gray",
    "grey",
    "griy",
    "gruy"
];
// words5.forEach(word => {
//     console.log(word, "=>", regex5.test(word));
// });

// [^] Not these characters
const regex6 = /[^0-9]/;
const words6 = [
    "1",
    "5",
    "a",
    "@"
];

// words6.forEach(word => {
//     console.log(word, "=>", regex6.test(word));
// });


// | OR
const regex7 = /cat|dog/;
const words7 = [
    "cat",
    "dog",
    "bird",
    "cow"
];
// words7.forEach(word => {
//     console.log(word, "=>", regex7.test(word));
// });



// () Group
const regex8 = /(Mr|Mrs)\.?\s[A-Z][a-z]+/;
const names = [
    "Mr John",
    "Mrs Anna",
    "Miss Rose",
    "Mr. David"
];
names.forEach(name => {
    console.log(name, "=>", regex8.test(name));
});


// ^ Start of string
const regex9 = /^Hello/;
const texts = [
    "Hello World",
    "Hi Hello",
    "Hello JS"
];

// texts.forEach(text => {
//     console.log(text, "=>", regex9.test(text));
// });


// $ End of string
const regex10 = /JS$/;
const texts2 = [
    "Learn JS",
    "JS Developer",
    "I love JS"
];

// texts2.forEach(text => {
//     console.log(text, "=>", regex10.test(text));
// });