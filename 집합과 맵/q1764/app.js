const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((e) => e);

let [listen, see] = input[0].split(" ").map((e) => Number(e));

let set = new Set();
for (let i = 1; i <= listen; i++) {
    set.add(input[i]);
}

let arr = [];
for (let i = listen + 1; i <= listen + see; i++) {
    if (set.has(input[i])) {
        arr.push(input[i]);
    }
}
arr.sort();
console.log(arr.length);
arr.length !== 0 && console.log(arr.join("\n"));
