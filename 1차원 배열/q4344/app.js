const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 1; i < input.length; i++) {
    let answer = input[i].split(" ").map((e) => Number(e));

    let totalScore = 0;
    for (let i = 1; i < answer.length; i++) {
        totalScore += answer[i];
    }
    let avg = totalScore / answer[0];

    let count = 0;
    for (let i = 1; i <= answer.length; i++) {
        if (avg < answer[i]) {
            count++;
        }
    }
    let result = ((count * 100) / answer[0]).toFixed(3);
    console.log(`${result}%`);
}
