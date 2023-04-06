const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((e) => e);

let arr = [...new Set(input)];
arr.splice(0, 1);
arr.sort((a, b) => {
    if (a.length === b.length) {
        return a.localeCompare(b);
    } else {
        return a.length - b.length;
    }
});

console.log(arr.join("\n"));
