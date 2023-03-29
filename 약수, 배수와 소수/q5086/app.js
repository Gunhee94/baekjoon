const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

let result = "";
for (let i = 0; i < input.length - 1; i++) {
    let [first, second] = input[i]
        .toString()
        .trim()
        .split(" ")
        .map((e) => Number(e));

    if (first % second === first) {
        result = "factor";
    } else if (first % second === 0) {
        result = "multiple";
    } else {
        result = "neither";
    }
    console.log(result);
}
