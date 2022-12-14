const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

let count = 0;

if (input < 100) {
    count = input;
} else {
    count = 99;
    for (let i = 0; i <= input; i++) {
        let num = i.toString().split("");
        let first = num[0] - num[1];
        let second = num[1] - num[2];
        if (first == second) {
            count++;
        }
    }
}

console.log(count);
