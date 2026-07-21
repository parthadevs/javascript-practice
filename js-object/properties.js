// Javascript Object 

const person = {
    name: "Partha Sarker",
    age: 23,
    degree: "B.Sc. in Computer Science & Engineering",
    university: "Dhaka International University",
    graduationYear: 2025,
    skills : {
        backend : "NestJS,Prisma,Postgresql,Docker",
        frontend : "Next.js, React, Tailwind CSS"
    }
};

//const about = `My name is ${person.name}. I am ${person.age} years old. I study ${person.degree} at ${person.university} and I will graduate in ${person.graduationYear}.`;

// access object properties in three ways

// [01] dot notation
console.log(person.name);

// [02] Bracket notation
console.log(person['name']);

// [03] Expression
let e1 = "name";
console.log(person[e1]);

// change value of a properties
console.log(person.age); // 23
person.age = 24;
console.log(person.age); // 24

// add new properties
person.country = "bangladesh"
person.profession = "Backend Developer"

console.log(person.country);
console.log(person.profession);

// delete properties
console.log(person.age); // 23
delete person.age
console.log(person.age); // undefined

// check properties exists

let isNameProperties = ("name" in person)
let unknownProperties = ("unknown" in person)
console.log(unknownProperties); // false
console.log(isNameProperties); // true

// access nested objects
console.log(person.skills.backend);
console.log(person.skills.frontend);

// object methods
// this refers the object
const person_new = {
    fname : "Partha",
    lname : "Sarker",
    fullname : function(){
        return this.fname + " " + this.lname
    }

}

console.log(person_new.fullname()); // retuen Partha Sarker

// display objects
let text = "";
for (let [key, value] of Object.entries(person)) {
  text += key + ": " + value + "\n";
  
}

console.log(text);


const oddObject = {
  "1stProperty": "Hello",
  "property with spaces": "World"
};

console.log(oddObject["1stProperty"]);  // Hello
console.log(oddObject["property with spaces"]);  // World