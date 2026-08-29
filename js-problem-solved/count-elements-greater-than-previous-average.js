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
 * Complete the 'countResponseTimeRegressions' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY responseTimes as parameter.
 */
function average(array){
    let sum = 0;
    for(let item of array){
        sum+=item;
    }
    return sum/array.length
}

function countResponseTimeRegressions(responseTimes) {
    let count = 0
    if(responseTimes.length === 0){
        
    }
    for(let i=0; i< responseTimes.length;i++){
        if(i==0){
            continue
        }
        if(responseTimes[i] > average(responseTimes.slice(0,i))){
            count++
        }
    }

  return count
}


function main() {
    const responseTimesCount = parseInt(readLine().trim(), 10);

    let responseTimes = [];

    for (let i = 0; i < responseTimesCount; i++) {
        const responseTimesItem = parseInt(readLine().trim(), 10);
        responseTimes.push(responseTimesItem);
    }

    const result = countResponseTimeRegressions(responseTimes);

    process.stdout.write(result + '\n');
}


// My mistake:
// I used `splice()` to get the previous elements, but `splice()`
// removes those elements from the original array.
// This changes the array while the loop is still using it,
// causing the indexes and values to shift.
// `slice()` should be used when I only need a copy of previous elements.