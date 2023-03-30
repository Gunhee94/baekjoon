const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((e) => Number(e));

for (let i = 0; i < input.length - 1; i++) {
    let str = String(input[i]) + " = ";
    let sum = 0;
    for (let j = 0; j < input[i]; j++) {
        if (input[i] % j === 0) {
            str += String(j) + " + ";
            sum += j;
        }
    }
    if (input[i] === sum) {
        str = str.slice(0, -3);
        console.log(str);
    } else {
        console.log(input[i] + " is NOT perfect.");
    }
}
