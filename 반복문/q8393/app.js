const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString()

let hab = 0;
for (let i=1; i<=input; i++) {
    hab += i;
}

console.log(hab);

