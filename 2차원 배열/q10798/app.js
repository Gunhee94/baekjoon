const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

let maxLength = 0;
for (let i = 0; i < input.length; i++) {
    if (maxLength < input[i].split("").length) {
        maxLength = input[i].split("").length;
    }
}
let result = "";
for (let k = 0; k < maxLength; k++) {
    let str = input.map((e) => e.split("").map((n) => n));

    for (let i = 0; i < input.length; i++) {
        if (str[i][k] !== undefined) {
            result += String(str[i][k]);
        }
    }
}

console.log(result);
