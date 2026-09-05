const treeWeakSet = new WeakSet();

const baobab = { name: "Baobab" };
const jackalberry = { name: "Jackalberry" };
const mopaneTree = { name: "Mopane Tree" };
const breadfruit = { name: "Breadfruit" };

treeWeakSet.add(baobab);
treeWeakSet.add(jackalberry);
treeWeakSet.add(mopaneTree);
treeWeakSet.add(breadfruit);

treeWeakSet.delete(jackalberry);
console.log(treeWeakSet.has(jackalberry)); // false

console.log(treeWeakSet);
// output 

/*
WeakSet {{…}, {…}, {…}}
  [[Entries]]
    0: value: {name: "Mopane Tree"}
    1: value: {name: "Baobab"}
    2: value: {name: "Breadfruit"}
  [[Prototype]]: WeakSet
*/

// WeakSet allow only add(), delete() and has() method
// and Does not support iteration