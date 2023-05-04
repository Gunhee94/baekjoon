const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const len = input[0];
input.shift();
input.sort((a, b) => a - b);

let result = Math.round(
    input.reduce((sum, currValue) => {
        return sum + currValue;
    }, 0) / len
);
console.log(result === -0 ? 0 : result);

console.log(input[Math.round(len / 2) - 1]);

const map = new Map();
let max = 1;
for (let number of input) {
    if (map.has(number)) {
        max = Math.max(max, map.get(number) + 1);
        map.set(number, map.get(number) + 1);
    } else {
        map.set(number, 1);
    }
}
const maxArr = [];
for (let [key, val] of map) {
    if (val === max) {
        maxArr.push(key);
    }
}
console.log(maxArr.length === 1 ? maxArr[0] : maxArr[1]);

console.log(input[len - 1] - input[0]);
