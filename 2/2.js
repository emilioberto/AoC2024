import * as utils from "../abstractions/utilities.js";

const lines = utils.readFileLinesSync('2/input.txt');

const regex = /\d+/g;

var levels = [];
for (let line of lines) {
    const matches = line.match(regex);
    
    levels.push([...matches.map(e => +e)]);
}

let result = 0;

function isDecreasing(array){
    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        if (array.length <= index + 1){
            continue;
        }

        const nextElement = array[index+1];
        if (element < nextElement){
            return false;
        };

        if (element - nextElement > 3 || element - nextElement < 1){
            return false;
        }
    }    
    return true;
}

function isIncreasing(array){
    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        if (array.length <= index + 1){
            continue;
        }

        const nextElement = array[index+1];
        if (element > nextElement){
            return false;
        }

        if (nextElement - element > 3 || nextElement - element < 1){
            return false;
        }
    }    
    return true;
}


for(let level of levels){
    if (isIncreasing(level)){
        result++;
        continue;
    }
    if (isDecreasing(level)){
        result++;
        continue;
    }
}

console.log(result);

var result2 = 0;
for(let level of levels){
    if (isIncreasing(level)){
        result2++;
        continue;
    }
    if (isDecreasing(level)){
        result2++;
        continue;
    }

    for (let index = 0; index < level.length; index++) {
        const newArray = level.filter((_, i) => i != index);

        if (isIncreasing(newArray)){
            result2++;
            break;
        }
        if (isDecreasing(newArray)){
            result2++;
            break;
        }
    }
}
console.log(result2);