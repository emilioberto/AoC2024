import * as utils from "../abstractions/utilities.js";

const lines = utils.readFileLinesSync('1/input.txt');

let left = [];
let right = [];

const regex = /\d+/g;

for (let line of lines) {
    const matches = line.match(regex);
    
    left.push(+matches[0]);
    right.push(+matches[1]);
}

left.sort((a,b) => a-b);
right.sort((a,b) => a-b);
var result = 0;
left.forEach((e, i) => {
    var max = Math.max(left[i], right[i]);
    var min = Math.min(left[i], right[i]);

    var difference = max - min;
    result += difference;
});

console.log(result);

var result2 = 0;
left.forEach((left, i) => {
    var rightOccurrences = right.filter(right => left == right).length;
    result2 += (left * rightOccurrences);
});

console.log(result2);