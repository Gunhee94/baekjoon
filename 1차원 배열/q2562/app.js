const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let maxNum = 0;
let maxIndex = 0;
for (let i = 0; i < input.length; i++) {
    if (Number(input[i]) > maxNum) {
        maxNum = Number(input[i]);
        maxIndex = i + 1;
    }
}

console.log(maxNum);
console.log(maxIndex);
