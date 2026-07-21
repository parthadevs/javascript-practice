// Problem 1: Contains Word
function containsWord(text, word){
    return text.includes(word)
}

console.log(containsWord("I love JavaScript", "JavaScript")); // true
console.log(containsWord("Hello World", "Python")); // false

// Problem 2: First Position

function findFirst(text, char){
    return text.indexOf(char)
}

console.log(findFirst("javascript", "a"));

// Problem 3: Last Position
function findLast(text, char){
    return text.lastIndexOf(char);
}

console.log(findLast("banana", "a"));

// Problem 4: Count Word

function countWord(text,word){
    const rg = new RegExp(word,"ig")
    return text.match(rg).length
}
console.log(countWord("cat dog cat bird cat", "cat"));

// Problem 5: Find All Positions
function findPositions(text, char) {
    const arr = [];
    const lowerChar = char.toLowerCase();
    
    for (let i = 0; i < text.length; i++) {
        if (text[i].toLowerCase() === lowerChar) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(findPositions("banana", "a")); // [1, 3, 5]

// Problem 6: Case Insensitive Search
function containsWord(text,word){
    const rg = new RegExp(word,"ig")
    return text.includes(text)
}
console.log(containsWord("JavaScript", "javascript")); // true