const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const N = Number(input);
let count = 1;
let endNum = 1;

while (endNum < N) {
    endNum = 6 * count + endNum;

    count++;
}
console.log(count);
