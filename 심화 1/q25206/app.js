const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((e) => e);

const count = input.length;

for (let i = 0; i < count; i++) {
    let [name, score, grade] = input[i].split(" ").map((e) => e);
    if (grade !== "P") {
        console.log(grade);
    }
}
