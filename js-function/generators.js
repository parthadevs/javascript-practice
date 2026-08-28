// JavaScript Generators
// its a special type of function that not returning full result at a time, its produce value one by one
// and able to pause execution

// regular function

function normal(){
    return 1
    return 2
    return 3
}

console.log(normal()); // return 1 and function execution complate

// But Generators function

function* numbers(){
    yield 1
    yield 2
    yield 3
}
// here yield pause execution

for(const number of numbers()){
    console.log(number);
}

const generator = numbers()

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// Generator = Pausable Function

// Normal Function

// start ────── finish


// Generator

// start
//   │
// yield
//   │
//   │ pause
// next()
//   │
// yield
//   │
//   │ pause
// next()
//   │
// finish



// Lazy Evaluation

function* numbers() {
    console.log("Generating 1");
    yield 1;

    console.log("Generating 2");
    yield 2;

    console.log("Generating 3");
    yield 3;
}

const generatorX = numbers();

console.log("Created");

console.log(generatorX.next());


// Generator with input

function* test() {
    const value = yield "Give me a value";

    console.log(value);
}

const generatorY = test();

console.log(generatorY.next());
console.log(generatorY.next(100));