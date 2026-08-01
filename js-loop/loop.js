// use case of (for ... of)

const numbers = [10,2,34,35,6];
for(const num of numbers ){
    console.log(num);
}

// Output
// 10
// 2
// 34
// 35
// 6

const people = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Jim', age: 40 }
];

for (const person of people) {
  console.log(`${person.name} is ${person.age} years old`);
}

// Output 
// John is 30 years old
// Jane is 25 years old
// Jim is 40 years old


// use case of (for ... in)
console.log("== for...in ==")
const fruit = {
  name: 'apple',
  color: 'red',
  price: 0.99
};

for (const prop in fruit) {
  console.log(fruit[prop]);
}

const person = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA'
  }
};

function isObject(obj) {
  return typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
}

for (const prop in person) {
  if (isObject(person[prop])) {
    for (const nestedProp in person[prop]) {
      console.log(person[prop][nestedProp]);
    }
  } else {
    console.log(person[prop]);
  }
}


// TODO: forEach , map , filter , reduce lekbo kicu din por properly

