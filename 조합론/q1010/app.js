const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((e) => e);

function factorial(n) {
    if (n < 2) {
        return 1;
    }
    return factorial(n - 1) * n;
}

for (let i = 1; i <= input[0]; i++) {
    let [K, N] = input[i].split(" ").map(Number);
    let result = factorial(N) / (factorial(K) * factorial(N - K));
    console.log(Math.round(result));
}
