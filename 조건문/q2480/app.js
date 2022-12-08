const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(' ').map(e => Number(e));

let first = input[0];
let second = input[1];
let third = input[2];

input.sort((a, b) => b - a);

if ( first === second &&
     second === third && 
     first === third ) {
    result = 10000 + input[0] * 1000;
} else if (first !== second &&
           second !== third && 
           first !== third) {
    result = input[0] * 100;
} else {
    let same = first === second ? first : third;
    result = 1000 + same * 100;
}

console.log(result);