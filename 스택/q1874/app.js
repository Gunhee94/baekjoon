const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let len = input.shift();
let arr = [];
let answer = [];
let num = 1;
for (let i = 0; i < len; i++) {
    while (num <= input[i]) {
        arr.push(num);
        num++;
        answer.push("+");
    }
    let pop = arr.pop();
    answer.push("-");
    if (pop !== input[i]) {
        answer = ["NO"];
        break;
    }
}

console.log(answer.join("\n"));
