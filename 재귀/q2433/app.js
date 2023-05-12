const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

function factorial(n) {
    if (n < 2) {
        return 1;
    }
    return factorial(n - 1) * n;
}

console.log(factorial(input));
