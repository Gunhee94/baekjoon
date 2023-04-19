const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((e) => e);

input.shift();
let set = new Set();
let cnt = 0;
for (let i = 0; i <= input.length; i++) {
    if (input[i] === "ENTER") {
        cnt += set.size;
        set.clear();
        continue;
    }
    set.add(input[i]);
    if (i === input.length - 1) {
        cnt += set.size;
    }
}

console.log(cnt);
