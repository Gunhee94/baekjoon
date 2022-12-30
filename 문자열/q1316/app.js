const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let count = 0;
for (let i = 1; i < input.length; i++) {
    let setArr = new Set(input[i]);
    let strArr = input[i].split("");
    if (setArr.size === strArr.length) {
        count++;
    } else {
        for (let j = 0; j < strArr.length; j++) {
            if (strArr[j + 1] !== undefined) {
                if (strArr[j] === strArr[j + 1]) {
                    count++;
                }
            }
        }
    }
}

console.log(count);
