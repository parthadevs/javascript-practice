const newMap = new Map();

// Map Methods

// 1. set() adds a key-value pair to the Map
newMap.set("name", "Partha");
newMap.set("age", 23);
newMap.set("role", "Backend Engineer");

console.log(newMap);


// 2. get(key) - retrieves the value associated with a key
console.log(newMap.get("name")); // Partha
console.log(newMap.get("age"));  // 23


// 3. has(key) - checks if a key exists in the Map
console.log(newMap.has("name"));  // true
console.log(newMap.has("email")); // false


// 4. delete(key) - removes a key-value pair
newMap.delete("age");

console.log(newMap);


// 5. clear() - removes all key-value pairs
newMap.clear();

console.log(newMap); // Map(0) {}


// Add items again for the next examples
newMap.set("name", "Partha");
newMap.set("age", 23);
newMap.set("role", "Backend Engineer");


// 6. entries() - returns an iterator containing key-value pairs
console.log(newMap.entries());


// You can convert the iterator into an array
console.log([...newMap.entries()]);


// 7. forEach() - loops through each key-value pair
newMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});


// 8. size - returns the number of key-value pairs
console.log(newMap.size); // 3

// summary

// set(key, value)  → add/update
// get(key)         → get value
// has(key)         → check key
// delete(key)      → remove pair
// clear()          → remove everything
// entries()        → get key-value pairs
// forEach()        → loop through Map
// size             → number of pairs