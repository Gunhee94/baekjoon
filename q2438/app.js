const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n')

let star = "";

for (let i=0; i<input; i++) {

    for (let j=0; j<input - i - 1; j++) {
        star += " "
    }
    for (let k=0; k<=i; k++) {
        star += '*';
      }
    star += '\n';
}

console.log(star);