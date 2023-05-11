const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((e) => e);

let arr = [];
for (let i = 1; i <= input[0]; i++) {
    let ps = input[i].split("").map((e) => e);

    arr = [];
    for (let j = 0; j < ps.length; j++) {
        arr.push(ps[j]);
        if (arr[arr.length - 2] !== undefined) {
            if (arr[arr.length - 2] + arr[arr.length - 1] === "()") {
                arr.pop();
                arr.pop();
            }
        }
    }
    console.log(arr.length === 0 ? "YES" : "NO");
}
