const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((e) => e);

for (let i = 1; i <= input[0]; i++) {
    let str = input[i];

    let first = str[0];
    let last = str[str.length - 1];
    if (last === undefined) {
        last = first;
    }

    console.log(first + last);
}
