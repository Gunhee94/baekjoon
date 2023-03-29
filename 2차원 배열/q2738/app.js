const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, M] = input[0]
    .toString()
    .trim()
    .split(" ")
    .map((e) => Number(e));

let str = [];
for (let i = 1; i < input.length; i++) {
    str[i - 1] = input[i]
        .toString()
        .trim()
        .split(" ")
        .map((e) => Number(e));
}

for (let i = 0; i < N; i++) {
    let result = "";
    for (j = 0; j < M; j++) {
        result += str[i][j] + str[N + i][j] + " ";
    }
    console.log(result);
}
