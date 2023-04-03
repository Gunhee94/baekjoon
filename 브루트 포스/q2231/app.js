const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim();

let result = 0;
for (let i = 0; i < input; i++) {
    let number = i;
    let sum = 0;

    while (number != 0) {
        sum += Math.trunc(number % 10);
        number = Math.trunc(number / 10);
    }
    if (sum + i === Number(input)) {
        result = i;
        break;
    }
}

console.log(result);
