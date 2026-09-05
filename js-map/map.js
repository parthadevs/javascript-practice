// In JavaScript, a Map is a built-in object that stores key-value pairs, similar to an object. 
// However, it differs from standard JavaScript objects by allowing keys of any type, including objects and functions.

// A WeakMap is a collection of key-value pairs, similar to a Map, but it uses weak references for its keys. 
// The keys must be objects, while the values can be of any type.

const myFirstMap = new Map();

console.log(myFirstMap);

const myTreesMap = new Map([
 [{ type: 'deciduous' }, 'Maple tree'], // key type object
 [['forest', 'grove'], 'Pine tree'], // key type array
 [42, 'Oak tree'], // key is primitive
 [true, 'Birch tree'], // key type is boolen
 [function() { return 'I am a function key'; }, 'Willow tree'], // key type is function
]);

const myTreesMap2 = new Map();

myTreesMap.set({ type: 'deciduous' }, 'Maple tree');
myTreesMap.set([1, 2], 'Pine tree');
myTreesMap.set(42, 'Oak tree');
myTreesMap.set(true, 'Birch tree');
myTreesMap.set(function() { return "I'm a function key"; }, 'Willow tree');

console.log(myTreesMap);
