// In JavaScript, Set is a built-in object for managing data collections
const firstSet = new Set()

// two type of set

// one is regular set and another is WeakSet

// retular Set store any type of unique value but
// WeakSet store dose not support primitives likes numbers or strings its store only object and its references


const treeSet = new Set(["Baobab", "Jackalberry", "Mopane Tree", "Breadfruit"]);

// If logs treeSet show

/*
Set(4) {"Baobab", "Jackalberry", "Mopane Tree", "Breadfruit"}
  [[Entries]]
  0: "Baobab"
    value: "Baobab"
  1: "Jackalberry"
    value: "Jackalberry"
  2: "Mopane Tree"
    value: "Mopane Tree"
  3: "Breadfruit"
    value: "Breadfruit"
  size: 4
  [[Prototype]]: Set
*/

// Set not allow use methods before Set initalize

const nemeSet = new Set()

nemeSet.add("Partha sarker");
nemeSet.add("Jahidul Isalam");
nemeSet.add("Ankon Sarker");

console.log(nemeSet); // Set(3) { 'Partha sarker', 'Jahidul Isalam', 'Ankon Sarker' }