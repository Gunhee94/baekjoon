const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

function fn(n) {
    if (n === 1) {
        return 1;
    } else if (n === 0) {
        return 0;
    }
    return fn(n - 1) + fn(n - 2);
}

console.log(fn(Number(input)));
