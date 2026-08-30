'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'processCouponStackOperations' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY operations as parameter.
 */

function processCouponStackOperations(operations) {
    let array = [];
    let result = [];

    for (let operation of operations) {

        if (operation.startsWith('push')) {
            const parts = operation.split(" ");
            const number = Number(parts[1]);
            array.push(number);
        } else if (operation.startsWith('pop')) {
            array.pop();
        } else if (operation.startsWith('top')) {
            result.push(array[array.length - 1]);
        } else if (operation.startsWith('getMin')) {
            result.push(Math.min(...array));
        }
    }

    return result;
}

// Mistake 1:
// `return` inside the loop stops the entire function immediately.
// I should collect each query result using `result.push()`
// and return the result array after processing all operations.

// Mistake 2:
// The function is expected to return an INTEGER_ARRAY,
// but I was returning a single integer from `top` or `getMin`.

// Mistake 3:
// I was not storing the results of multiple `top` and `getMin` operations.




function main() {
    const operationsCount = parseInt(readLine().trim(), 10);

    let operations = [];

    for (let i = 0; i < operationsCount; i++) {
        const operationsItem = readLine();
        operations.push(operationsItem);
    }

    const result = processCouponStackOperations(operations);

    process.stdout.write(result.join('\n') + '\n');
}
