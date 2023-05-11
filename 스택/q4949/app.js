const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(".")
    .map((e) => e);
input.pop();
input.pop();
for (let i = 0; i < input.length; i++) {
    let replace = input[i].replace("\n", "");
    let arr = [];
    for (let j = 0; j < replace.length; j++) {
        if (replace[j] === "(" || replace[j] === ")" || replace[j] === "[" || replace[j] === "]") {
            arr.push(replace[j]);
        }

        if (arr[arr.length - 2] !== undefined) {
            if (
                arr[arr.length - 2] + arr[arr.length - 1] === "()" ||
                arr[arr.length - 2] + arr[arr.length - 1] === "[]"
            ) {
                arr.pop();
                arr.pop();
            }
        }
    }
    console.log(arr.length === 0 ? "yes" : "no");
}
