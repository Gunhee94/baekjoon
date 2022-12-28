const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

let num = 0;
let str = "";
for (let i=0; i<input.length; i++) {
    str = input[i].toString().split("").reverse().join("");
    if (num < Number(str)) {
        num = Number(str);
    }
}

console.log(num)