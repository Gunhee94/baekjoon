const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((e) => e.split(" ").map((n) => Number(n)));

let maxNum = 0;
let n = 0;
let m = 0;
for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
        if (maxNum <= input[i][j]) {
            maxNum = input[i][j];
            n = i + 1;
            m = j + 1;
        }
    }
}

console.log(maxNum);
console.log(n, m);
