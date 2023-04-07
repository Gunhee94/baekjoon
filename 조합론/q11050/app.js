const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [N, K] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

function factorial(n) {
    if (n < 2) {
        return 1;
    }
    return factorial(n - 1) * n;
}
console.log(factorial(N) / (factorial(K) * factorial(N - K)));
