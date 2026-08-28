
function greet(name){
    console.log(`Hello ${name}`);
}

function processUser(callback){
    const name = "partha sarker";

    callback(name)
}

processUser(greet)

// callback with array map method

const number = [1, 2, 3, 4, 5, 6];

// pass arrow function inside map
const doubled = number.map(num =>{
    return num * 2;
})
console.log(doubled);

// pass regular function as a argumanet
function nMultipy(n) {
    return n * 2;
}

const newDoubleArray = number.map(nMultipy);

console.log(newDoubleArray);

// filter method
const eventNumber = number.filter(num => num % 2 === 0)

console.log("even number : ", eventNumber);


// three important callback type

// 1. Synchronous callback

[1,2,3].map(x=> x*2)

// 2. Asynchronous callback

setTimeout(() => {
    console.log("Done");
}, 1000);

// 3. Error-first callback

function callback(error, result) {
    if (error) {
        // handle error
        return;
    }

    // use result
}

// A callback is a function passed to another function so that it can be invoked later or durign some operation

// Callback
//    │
//    ├── synchronous
//    │
//    └── asynchronous
//            │
//        Event Loop
//            │
//         Promise
//            │
//       async / await