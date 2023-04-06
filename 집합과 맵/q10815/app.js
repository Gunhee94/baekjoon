const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((e) => e);

let card = new Set(input[1].split(" ").map(Number));

let findCard = input[3].split(" ").map(Number);

let result = "";
for (let i = 0; i < input[2]; i++) {
    if (card.has(findCard[i])) {
        result += 1 + " ";
    } else {
        result += 0 + " ";
    }
}
console.log(result);
