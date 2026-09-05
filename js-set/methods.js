const newSet = new Set();

// 1. add() method adds an item to the Set
newSet.add("Apple");
newSet.add("Banana");
newSet.add("Mango");

console.log(newSet); // Set(3) { 'Apple', 'Banana', 'Mango' }


// 2. delete() method removes an item from the Set
newSet.delete("Banana");

console.log(newSet); // Set(2) { 'Apple', 'Mango' }


// 3. clear() method removes all items from the Set
newSet.clear();

console.log(newSet); // Set(0) {}


// Add items again for the next examples
newSet.add("Apple");
newSet.add("Banana");
newSet.add("Mango");


// 4. has() method checks whether an item exists
console.log(newSet.has("Apple"));  // true
console.log(newSet.has("Orange")); // false


// 5. entries() method returns an iterator containing [value, value] pairs
console.log(newSet.entries());

//output
// [Set Entries] {
//   [ 'Apple', 'Apple' ],
//   [ 'Banana', 'Banana' ],
//   [ 'Mango', 'Mango' ]
// }


// 6. forEach() method executes a function for each item
newSet.forEach((value) => {
  console.log(value);
});

// Output

// Apple
// Banana
// Mango


// 7. keys() method returns an iterator containing all values
console.log(newSet.keys()); // [Set Iterator] { 'Apple', 'Banana', 'Mango' }


// 8. values() method returns an iterator containing all values
console.log(newSet.values()); // [Set Iterator] { 'Apple', 'Banana', 'Mango' }