const weakMap = new WeakMap();

// WeakMap Methods

// 1. set(key, value) - adds a key-value pair
// WeakMap keys must be objects
const user = {
  name: "Partha",
};

weakMap.set(user, "Backend Engineer");

console.log(weakMap);


// 2. get(key) - retrieves the value associated with a key
console.log(weakMap.get(user)); // Backend Engineer


// 3. has(key) - checks if a key exists
console.log(weakMap.has(user)); // true


// 4. delete(key) - removes a key-value pair
weakMap.delete(user);

console.log(weakMap.has(user)); // false