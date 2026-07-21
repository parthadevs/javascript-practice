# Javascript String Tricky Questions


## Overview

Complete Guide to 50 Advanced and Intermediate Tricky Questions to Understand Deep Concepts of JavaScript Strings, Type Queries and Memory Management



## The Cache Illusion

### Code

```javascript
let str = "hello";
str.customProp = "🎯";

console.log(str.customProp);
```

### Output

```text
undefined
```

### Explanation

<p>
Strings are a primitive data type in JavaScript (not objects). 
When you write str.customProp = "🎯", JavaScript temporarily converts that
string into an object (called a Wrapper Object) in the background, assigns 
the property, and immediately deletes that object from memory.
When you call str.customProp again on the next line, JavaScript 
creates a completely new Wrapper Object, which no longer contains the previous property. 
Hence the output is undefined.
</p>

## The Sneaky Substring

### Code

```javascript
let text = "JavaScript";

console.log(text.slice(4, 1));
console.log(text.substring(4, 1));
```

### Output

```text
""
ava
```

### Explanation

<p>
Although both methods are used to cut strings, 
the way they handle their arguments is different: slice(start, end): Here, if start (4) is greater than end (1), slice() does nothing, directly returning an empty string (""). substring(start, end): This method is quite clever. If start > end, it automatically swaps the two arguments! 
That is, substring(4, 1) becomes substring(1, 4) in the background. 
And so it cuts the part from index 1 to index 4, i.e. "ava", and displays it.
</p>

## The Emoji Length Trap
### Code
```javascript
let emojiStr = "𝌆"; 
let familyEmoji = "👨‍👩‍👧‍👦"; 

console.log(emojiStr.length);   
console.log(familyEmoji.length);
```
### Output
```text
2
11
```
### Explanation
<p>
JavaScript strings are based on UTF-16 code units. Each character is allocated 16-bits (2 bytes) of memory.
For normal text, 1 code unit is enough. But since 𝌆 or normal emojis are large, they occupy 2 code units (Surrogate Pair) in memory. So its length is shown as 2.
The family emoji (👨‍👩‍👧‍👦) is not actually a single emoji! It is made up of 4 separate emojis (father, mother, daughter, son) and a special invisible character (Zero Width Joiner - ZWJ) connecting them. All these code units together make up 11.
</p>


## The Empty Array Concatenation
### Code

```javascript
let result = "JS" + [];
console.log(result);
console.log(typeof result);
```

### Output

```text
JS
```

### Explanation

<p>
In JavaScript, when you append a string to something else using the + operator, the other part is automatically converted to a string. An empty array [] is converted to a string, producing an empty string "". So "JS" + "" outputs "JS", whose type is obviously "string".
</p>

## The Array Addition Magic

### Code

```javascript
console.log("Result: " + [1, 2] + [3, 4]);
```

### Output

```text
Result: 1,23,4
```

### Explanation

<p>
Here too, type coercion occurs due to the presence of the + operator. First, "Result: " is added to [1, 2] to create "Result: 1,2". Then, [3, 4] is added to that string and the elements inside the array are joined with commas. As a result, the final output is "Result: 1,23,4".
</p>



## The Decrement Surprise

### Code

```javascript
console.log("10" - "5");
console.log("10" - "five");
```

### Output

```text
5
NaN
```

### Explanation

<p>
In JavaScript, the + operator has a dual role (adding and concatenating strings). But the - (subtraction) operator only understands math.

When doing "10" - "5", JavaScript forcibly converts both strings to numbers (10 - 5) and outputs 5.

When doing "10" - "five", JavaScript gets NaN (Not a Number) while converting "five" to a number. And when you subtract NaN from any number, the result is always NaN.
</p>

## Object as a Key

### Code

```javascript
let obj = {};
let str = "name";
let objKey = { key: "value" };

obj[str] = "Partha";
obj[objKey] = "Sarker";

console.log(obj["[object Object]"]);
```

### Output

```text
Sarker
```

### Explanation

In JavaScript, a plain object key can always be either a String or a Symbol. When we use an object as a key for another object (e.g. obj[objKey]), JavaScript automatically converts that object to a string. And the string conversion of any plain object is "[object Object]".

So `obj[objKey] = "Sarker"` was actually set to `obj["[object Object]"] = "Sarker"` in the background.

---

## The String Object Comparison

### Code

```javascript
let str1 = "Parthadevs";
let str2 = new String("Parthadevs");

let ans1 = (str1 == str2);
let ans2 = (str1 === str2);
console.log(ans1, ans2);
```

### Output

```text
true false
```

### Explanation

`str1 == str2` (Loose Equality): Here the types are different (a primitive string and an object). JavaScript converts the object to its original value or primitive value. Since both have the same original text `"Parthadevs"`, it returns true.

`str1 === str2` (Strict Equality): This does not perform any type conversion. Since one is of type `string` and the other is of type `object`, it returns false directly.

---

## The NaN Comparison

### What is the output of the following code and why?

```javascript
let str = "ParthaDevs" / 2; 
console.log(str == NaN);
console.log(str === NaN);
```

### Output

```text
false
false
```

### Explanation

In JavaScript, the mathematical result of `ParthaDevs / 2` is NaN (Not a Number). According to the JavaScript specification, NaN is the only value that is not equal to itself! That is, both `NaN == NaN` and `NaN === NaN` will always return false.

How to check: To check if a value is actually NaN, use the `Number.isNaN(value)` method.

---

## The charCodeAt vs codePointAt

### Code

```javascript
let emoji = "🚀";
console.log(emoji.charCodeAt(0));
console.log(emoji.codePointAt(0));
```

### Output

```text
55357
128640
```

### Explanation

🚀 The emoji is a surrogate pair (composed of 2 code units).
The `charCodeAt(0)` method is old and only returns the first 16-bit code unit (Upper Surrogate), which is 55357 in decimal.

On the other hand, the modern `codePointAt(0)` is able to return the actual Unicode (Code Point) of the entire complete character, which is 128640.

---

## The `parseInt` with `Radix`

### Question

```javascript
console.log(parseInt("101", 2));
console.log(parseInt("8", 8));
```

### Output

```text
5
NaN
```

### Explanation

`parseInt("101", 2)` Here radix 2 is given, which means converting from binary (Base 2) to decimal. The decimal value of binary 101 is 5.

`parseInt("8", 8)` Here radix 8 is given, which means octal (Base 8) system. But in octal system, digits can only be from 0 to 7, 8 is not a valid digit. So JavaScript returns NaN at the beginning without finding any valid digit.

---

## The Double NOT (!!) on Empty String
### Code

```javascript
console.log(!!"", !!" ");
```
### Output
```text
false true
```

### Explanation
The double not `!!` operator basically casts or converts any value to its equivalent Boolean value.
An empty string `""` is a false value in JavaScript, so its true Boolean form is false.
But the string `" "` with spaces is not empty at all, it has a space character inside it. It is a truthy value, so its output is true.


## The `valueOf()` Method

### Question

```javascript
let strObj = new String("ParthaDevs");
console.log(typeof strObj.valueOf());
```

### Output

```text
ParthaDevs
```

### Explanation

When you use `new String("ParthaDevs")`, JavaScript creates a string object in memory (with typeof "object"). When the `.valueOf()` method is called on this object, it breaks down the layer of the object and extracts the original primitive string value `("ParthaDevs")` inside it. And the type of a primitive string is always "string".

---

## The URL Magic (Encoding vs Decoding)

### Code

```javascript
let url = "[https://example.com/search?q=js](https://example.com/search?q=js) & react";
console.log(encodeURI(url));
console.log(encodeURIComponent(url));
```

### Output

```text
let url = "[https://example.com/search?q=js](https://example.com/search?q=js) & react";
console.log(encodeURI(url));
console.log(encodeURIComponent(url));
```

### Explanation

`encodeURI()` This is used to encode an entire URL. It does not change the structural characters of the URL itself (such as `http://`, `:`, `/`, `?`, `&`) it only encodes spaces or special characters.

`encodeURIComponent()` This is used to encode a specific part of the URL or query parameter. It encodes all the special characters `:`, `/`, `?`, `&`. So if you pass the entire URL through it, it will not work in the browser.

---

## String Iterator Protocol

### Code

```javascript
let str = "A🚀B";
for (let char of str) {
  console.log(char);
}
```

### Output

```text
A
🚀
B
```

### Explanation

In previous, we saw that split('') breaks up surrogate pairs (emojis). But ES6's `for...of` loop works internally using the Iterator Protocol of String. This iterator protocol is quite smart; it recognizes `surrogate pairs` or code unit pairs as complete Unicode characters without separating them. So it correctly prints the entire emoji together without breaking the emoji.

---

## String to Number via Unary Plus (+)

### Code

```javascript
console.log(+"");
console.log(+"   ");
console.log(+"123a");
console.log(+"Infinity");
```

### Output

```text
0
0
NaN
Infinity
```

### Explanation

The Unary Plus `+` operator attempts to convert a string to a number. The completely empty string `""` and the string containing only spaces `" "` are converted to the number `0`. If the string contains any `non-digit` characters (such as "123a"), the conversion fails and returns `NaN`.

However, JavaScript recognizes certain scientific string values ​​in the format `Infinity` or `Hex` as valid numbers and returns Infinity directly.

---


## String Intercept via Proxy

### Code

```javascript
let str = "Hello";
try {
  let proxyStr = new Proxy(str, {});
} catch(e) {
  console.log(e.message);
}
```

### Output

```text
Cannot create proxy with a non-object as target or handler
```

### Explanation

JavaScript Proxy can only operate on Objects (`simple objects`, `arrays`, `functions`). Since a plain string is a primitive value, it is impossible to pass it directly as a target of the Proxy and it will throw an error directly at runtime.

---

## String Comparison via Unicode Normalization

### Code

```javascript
let str1 = "café"; 
let str2 = "cafe\u0301"; 
console.log(str1 === str2);
console.log(str1.normalize() === str2.normalize());
```

### Output

```text
false
true
```

### Explanation

Although they look exactly the same, their binary codes are different in the background. In `str1`, the `é` character is stored as a single Unicode character. In `str2`, the character `e` is first created by adding an accent or combining character (\u0301). Since the binary codes of the characters are different, === gives an error.

Solution: Calling the `.normalize()` method before comparing causes JavaScript to bring both strings into the same standard binary format, resulting in the correct output.

---

## The undefined Stringification

### Question

```javascript
console.log("Value: " + undefined);
console.log(String(null) === "null");
```

### Output

```text
Value: undefined
true
```

### Explanation

When `undefined` or `null` are concatenated to a string or passed to the `String()` method, JavaScript internally converts them to their original text or string form. That is `undefined` becomes the pure string `"undefined"` and `null` becomes the pure string `"null"`.

---

## Variable Shadowing via Eval

### Question

```javascript
let x = 10;
function test() {
  eval("var x = 20;");
  console.log(x);
}
test();
```

### Output

```text
20
```

### Explanation
The `eval()` function executes the given string as JavaScript code. 
In this example `eval()` creates a local variable `var x = 20` inside the function. This local variable hides the outer `let x = 10` so the output inside the function is `20`.

---

## The Non-String Primitive in includes()

### Code

```javascript
let text = "The absolute truth is 42";
console.log(text.includes(42));
console.log(text.includes(true));
```

### Output

```text
true
false
```

### Explanation
The `includes()` method searches for a value inside a string. If you pass a `number` or `boolean`, JavaScript automatically converts it to a `string`. So `42` becomes `"42"`, which is found in the text, so it returns true. But `"true"` is not in the text, so it returns false.

---

## Empty String vs White Space in trimStart

### Code

```javascript
console.log("   ".trimStart().length === "".length);
```

### Output

```text
true
```

### Explanation
The `trimStart()` method trims all `whitespace` or `empty` space at the beginning of a string. Since this string contains no characters other than 3 spaces `trimStart()` trims all spaces and converts it to a completely empty string `("")`. And the length of an empty string is always `0`, which is equal to `"".length`. So the result is true.

---





## 🔗 Related Topics

- Scope
- Hoisting
- Closures
- Execution Context