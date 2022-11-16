const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ').map(el => Number(el));

let chess = [1, 1, 2, 2, 2, 8];

const result = input.map((e, i) => {return chess[i] - e});

console.log(...result)