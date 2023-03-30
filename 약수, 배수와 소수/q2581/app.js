const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((e) => Number(e));

let sosuArr = [];
for (let i = input[0]; i <= input[1]; i++) {
    let num = 1;
    let count = 0;
    while (i >= num) {
        if (i !== 1) {
            if (i % num === 0) {
                count += 1;
            }
        }
        num += 1;
    }
    if (count === 2) {
        sosuArr.push(i);
    }
}

if (sosuArr.length === 0) {
    console.log(-1);
} else {
    console.log(sosuArr.reduce((a, b) => a + b, 0));
    console.log(Math.min.apply(null, sosuArr));
}
