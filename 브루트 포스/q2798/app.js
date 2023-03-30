const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((e) => e);

const [leng, hab] = input[0].split(" ").map((e) => Number(e));
let arr = input[1].split(" ").map((e) => Number(e));

let result = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        for (let k = j + 1; k < arr.length; k++) {
            const sum = arr[i] + arr[j] + arr[k];
            if (hab >= sum) {
                if (result <= sum) {
                    result = sum;
                }
            }
        }
    }
}

console.log(result);
