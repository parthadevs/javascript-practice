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
 * Complete the 'areBracketsProperlyMatched' function below.
 *
 * The function is expected to return a BOOLEAN.
 * The function accepts STRING code_snippet as parameter.
 */

function areBracketsProperlyMatched(code_snippet) {
    const pair = {
        ")" : "(",
        "}" : "{",
        "]" :  "[",
    }
    let stack = [];
    for(let char of code_snippet){
       if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        }else if(char === ')' || char === '}' || char === ']'){
            const lastOpeningBracket = stack.pop();

            if(lastOpeningBracket != pair[char]){
                return false
            }
        }


    }

    return stack.length === 0;


}

function main() {
    const code_snippet = readLine();

    const result = areBracketsProperlyMatched(code_snippet);

    process.stdout.write((result ? 1 : 0) + '\n');
}
