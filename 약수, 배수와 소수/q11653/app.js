const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim();

let num = Number(input);
let i = 2;
while (num !== 1) {
    if (num % i === 0) {
        num = num / i;
        console.log(i);
    } else {
        i++;
    }
}
