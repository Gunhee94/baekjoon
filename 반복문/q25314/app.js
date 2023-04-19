const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

input = Number(input);

let num = 1;
let answer = "";
while (num < input) {
    num = num + 4;
    answer += "long ";
}
console.log(answer + "int");
