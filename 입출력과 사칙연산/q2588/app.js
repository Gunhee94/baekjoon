const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(Number);

const A = input[0];
const B = input[1];

const arrayB = input[1].toString().split('').map(el=>Number(el));

console.log( A * arrayB[2] );
console.log( A * arrayB[1] );
console.log( A * arrayB[0] );
console.log( A * B );