const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((e) => e);

const arr = input[1].split(" ").map((e) => Number(e));

let sosu = 0;
for (let i = 0; i < arr.length; i++) {
    let num = 1;
    let count = 0;
    while (arr[i] >= num) {
        if (arr[i] !== 1) {
            if (arr[i] % num === 0) {
                count += 1;
            }
        }
        num += 1;
    }
    if (count === 2) {
        sosu += 1;
    }
}

console.log(sosu);
