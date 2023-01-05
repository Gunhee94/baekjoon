const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const X = Number(input);
let count = 1;
let num = 0;
let numerator = 1;
let denominator = 1;

if (X == 1) {
    numerator = 1;
    denominator = 1;
} else {
    while (X >= num + 1) {
        count++;
        if (X >= (count * (count - 1)) / 2 && X <= (count * (count + 1)) / 2) {
            num = (count * (count + 1)) / 2;
        }
    }
    if (count % 2 == 0) {
        numerator = count - (num - X);
        denominator = num - X + 1;
    } else {
        numerator = num - X + 1;
        denominator = count - (num - X);
    }
}
console.log(numerator + "/" + denominator);
