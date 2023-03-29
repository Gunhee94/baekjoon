const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("");

let result = 1;
for (let i = 0; i < input.length; i++) {
    let start = input[i];
    let end = input[input.length - 1 - i];
    if (start !== end) {
        result = 0;
    }
}

console.log(result);
