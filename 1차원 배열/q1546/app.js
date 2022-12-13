const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const inputSort = input[1]
    .toString()
    .trim()
    .split(" ")
    .sort((a, b) => b - a);

let newTotalScore = 0;
for (let i = 0; i < inputSort.length; i++) {
    newTotalScore += (inputSort[i] / inputSort[0]) * 100;
}

console.log(newTotalScore / input[0]);
