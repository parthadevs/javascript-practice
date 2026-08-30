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
 * Complete the 'maximizeNonOverlappingMeetings' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY meetings as parameter.
 */

function maximizeNonOverlappingMeetings(meetings) {
    const sortedMeetings = meetings.sort((a, b) => a[1] - b[1]);
    let count = 0;
    let lastEndTime = -1;
    for(let meeting of sortedMeetings){
        const [startTime, endTime] = meeting;

        if (startTime >= lastEndTime) {
            count ++;
            lastEndTime = endTime; 
        }
    }

    return count

}
function main() {
    const meetingsRows = parseInt(readLine().trim(), 10);

    const meetingsColumns = parseInt(readLine().trim(), 10);

    let meetings = Array(meetingsRows);

    for (let i = 0; i < meetingsRows; i++) {
        meetings[i] = readLine().replace(/\s+$/g, '').split(' ').map(meetingsTemp => parseInt(meetingsTemp, 10));
    }

    const result = maximizeNonOverlappingMeetings(meetings);

    process.stdout.write(result + '\n');
}
