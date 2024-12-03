import * as utils from "../abstractions/utilities.js";

const lines = utils.readFileLinesSync('3/input.txt');

const regex = /(?<operator>mul)\((?<first>-?\d+),(?<second>-?\d+)\)/g;

var stringazza = lines.reduce((prev, curr, _) => prev += curr, "");

let result = 0;
let match;
while ((match = regex.exec(stringazza)) !== null) {
    result += (+match.groups.first) * (+match.groups.second);
}

console.log(result);

const dodontregex = /(do\(\)|don't\(\))/g;

let result2 = 0;
let shouldDo = true;


let currentIndex = 0;
while ((match = dodontregex.exec(stringazza)) !== null) {
    const segment = stringazza.slice(currentIndex, match.index);

    if (shouldDo) {
        let innerMatch;
        while ((innerMatch = regex.exec(segment)) !== null) {
            result2 += (+innerMatch.groups.first) * (+innerMatch.groups.second);
        }
    }

    if (match[0] === "don't()") {
        shouldDo = false;
    } else if (match[0] === "do()") {
        shouldDo = true;
    }

    currentIndex = dodontregex.lastIndex;
}

const remainingSegment = stringazza.slice(currentIndex);
if (shouldDo) {
    let innerMatch;
    while ((innerMatch = regex.exec(remainingSegment)) !== null) {
        result2 += (+innerMatch.groups.first) * (+innerMatch.groups.second);
    }
}

console.log(result2);