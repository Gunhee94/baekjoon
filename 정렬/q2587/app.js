const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((e) => Number(e));

input.sort((a, b) => a - b);

let hab = 0;
for (let i = 0; i < input.length; i++) {
    hab += input[i];
}
console.log(hab / input.length);
console.log(input[Math.floor(input.length / 2)]);
