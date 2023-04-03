const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((e) => e);

let [m, n] = input[0].split(" ").map((e) => Number(e));
let arr = input[1].split(" ").map((e) => Number(e));

arr.sort((a, b) => b - a);
console.log(arr[n - 1]);
