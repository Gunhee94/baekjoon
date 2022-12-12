const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n')

let [length, compareNum] = input[0].trim().split(" ");
let arr = input[1].split(" ");

let result = "";
for (let i = 0; i < length; i++) {
    if (Number(compareNum) > Number(arr[i])) {
        result += arr[i] + " ";
    }
}

console.log(result)


