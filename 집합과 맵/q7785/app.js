const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((e) => e);

let set = new Set();
for (let i = 1; i <= input[0]; i++) {
    let [name, log] = input[i].split(" ").map((e) => e);
    if (log === "enter") {
        set.add(name);
    } else {
        set.delete(name);
    }
}
let result = [...set].sort();
result.reverse();
console.log(result.join("\n"));
