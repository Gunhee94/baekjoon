const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const arr = [];
for (let i = 1; i <= input[0]; i++) {
    input[i] === 0 ? arr.pop() : arr.push(input[i]);
}

const result = arr.reduce(function add(sum, currValue) {
    return sum + currValue;
}, 0);

console.log(result);
