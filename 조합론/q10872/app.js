const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim();

let sum = 1;
for (let i = 1; i <= input; i++) {
    sum *= i;
}

console.log(sum);
