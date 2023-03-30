const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [first, second] = input
    .toString()
    .trim()
    .split(" ")
    .map((e) => Number(e));

let sequence = 1;
let count = 0;
while (first >= sequence) {
    if (first % sequence === 0) {
        count += 1;
        if (second === count) {
            break;
        }
    }
    sequence += 1;
}

if (first < sequence) {
    sequence = 0;
}
console.log(sequence);
