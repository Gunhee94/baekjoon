const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((e) => e);

const arr = [];
let result = [];
for (let i = 1; i <= input[0]; i++) {
    const [order, num] = input[i]
        .trim()
        .split(" ")
        .map((e) => e);

    if (order === "push") {
        arr.push(num);
    } else if (order === "pop") {
        if (arr.length === 0) {
            result.push(-1);
        } else {
            result.push(arr.pop());
        }
    } else if (order === "size") {
        result.push(arr.length);
    } else if (order === "empty") {
        if (arr.length === 0) {
            result.push(1);
        } else {
            result.push(0);
        }
    } else if (order === "top") {
        if (arr.length === 0) {
            result.push(-1);
        } else {
            result.push(arr[arr.length - 1]);
        }
    }
}

console.log(result.join("\n"));
