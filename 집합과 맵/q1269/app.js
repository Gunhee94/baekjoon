const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((e) => e);

let [A, B] = input[0].split(" ").map(Number);
let arrA = input[1].split(" ").map(Number);
let arrB = input[2].split(" ").map(Number);

let setArrA = new Set([...arrA]);
let setArrB = new Set([...arrB]);

let hab = 0;
for (let i = 0; i < A; i++) {
    if (!setArrB.has(arrA[i])) {
        hab++;
    }
}

for (let i = 0; i < B; i++) {
    if (!setArrA.has(arrB[i])) {
        hab++;
    }
}

console.log(hab);
