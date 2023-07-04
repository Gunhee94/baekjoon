const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let str = "";
function cantor(i) {
    if (i % 3 === 1) {
        str += " ";
    } else {
        if (Math.floor(i / 3) === 0) {
            str += "-";
        } else {
            cantor(Math.floor(i / 3));
        }
    }
}

for (let i = 0; i < input.length; i++) {
    str = "";
    if (input[i] === 0) {
        console.log("-");
    } else {
        let num = 1;
        for (let j = 1; j <= input[i]; j++) {
            num *= 3;
        }
        for (let k = 0; k <= num; k++) {
            cantor(k);
        }
        console.log(str);
    }
}
