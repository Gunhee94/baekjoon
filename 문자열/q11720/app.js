const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let hab = 0;

let arr = input[1].toString().split("");
for (let i = 0; i < arr.length; i++) {
    hab += Number(arr[i]);
}

console.log(hab);
