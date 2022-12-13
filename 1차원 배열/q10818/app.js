const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let arr = input[1].split(" ");

arr.sort((a, b) => a - b);

console.log(arr[0], arr[arr.length - 1]);
