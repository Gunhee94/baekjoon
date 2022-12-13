const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((e) => Number(e));

let arr = [];
for (let i = 1; i <= 30; i++) {
    if (!input.includes(i)) {
        arr.push(i);
    }
}

console.log(arr.join("\n"));
