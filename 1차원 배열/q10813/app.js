const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

let arr = [];
for (let i = 1; i <= N; i++) {
    arr.push(i);
}

for (let i = 1; i <= M; i++) {
    let [first, second] = input[i].split(" ").map(Number);
    const firstValue = arr[first - 1];
    const secondValue = arr[second - 1];
    arr[first - 1] = secondValue;
    arr[second - 1] = firstValue;
}
console.log(arr.join(" "));
