const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((e) => e);

let set = new Set();
set.add("ChongChong");
for (let i = 1; i <= input[0]; i++) {
    const [first, second] = input[i].split(" ").map((e) => e);
    if (set.has(first) || set.has(second)) {
        set.add(first);
        set.add(second);
    }
}
console.log(set.size);
