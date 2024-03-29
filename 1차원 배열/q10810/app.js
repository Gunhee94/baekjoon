const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

let arr = Array(N).fill(0);
for (let i = 1; i <= M; i++) {
    let [first, second, k] = input[i].split(" ").map(Number);
    for (let j = first; j <= second; j++) {
        arr[j - 1] = k;
    }
}
console.log(arr.join(" "));
