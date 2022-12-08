const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(' ').map(e => Number(e));

let h = input[0];
let m = input[1];

if (m - 45 >= 0) {
    m = m - 45;
} else {
    h = h == 0 ? 23 : --h;
    m = 15 + m;
}

console.log(h, m);