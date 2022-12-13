const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((e) => Number(e));

let arr = [];

for (let i = 0; i < input.length; i++) {
    arr.push(input[i] % 42);
}

arr = new Set(arr);
arr = [...arr];

console.log(arr.length);
