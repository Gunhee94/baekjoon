const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 1; i < input.length; i++) {
    let answer = input[i].split("");

    let score = 0;
    let continuNum = 0;
    for (let i = 0; i < answer.length; i++) {
        if (answer[i] === "O") {
            continuNum++;
            score += continuNum;
        } else {
            continuNum = 0;
        }
    }
    console.log(score);
}
