const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map((e) => Number(e));

const fixedCost = input[0];
const variableCost = input[1];
const noteBookCost = input[2];

let breakEvenPoint = 0;

if (noteBookCost - variableCost <= 0) {
    breakEvenPoint = -1;
} else {
    breakEvenPoint = Math.floor(fixedCost / (noteBookCost - variableCost) + 1);
}

console.log(breakEvenPoint);
