const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n')

let data = input[1].split(" ");

let count = 0;
for (let i = 0; i < data.length; i++) {
    if (input[2] === data[i]) {
        count++;
    }
}

console.log(count)




