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
 * Complete the 'isNonTrivialRotation' function below.
 *
 * The function is expected to return a BOOLEAN.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */


function isNonTrivialRotation(s1, s2) {
    if (s1 === s2) {
        return false;
    }
    for (let i = 0; i < s2.length - 1; i++) {
        let last = s2[s2.length - 1];
        s2 = last + s2.slice(0, s2.length - 1);
        if (s1 === s2) {
            return true;
        }
    }

    return false;
}

function main() {
    const s1 = readLine();

    const s2 = readLine();

    const result = isNonTrivialRotation(s1, s2);

    process.stdout.write((result ? 1 : 0) + '\n');
}


// My mistake:
// I returned true when s1 and s2 were identical,
// but the problem asks for a NON-TRIVIAL rotation.
// So identical strings must return false.