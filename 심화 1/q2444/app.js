const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

input = Number(input);

for (let i = 1; i <= input; i++) {
    let star = "";
    for (let j = i; j < input; j++) {
        star += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
        star += "*";
    }
    console.log(star);
}

for (let i = input - 1; i >= 1; i--) {
    let star = "";
    for (let j = i; j < input; j++) {
        star += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
        star += "*";
    }
    console.log(star);
}
