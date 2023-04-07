const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim();

let set = new Set();
let a = [];
for (let i = 1; i <= input.length; i++) {
    for (let j = 0; j < input.length; j++) {
        set.add(input.substr(j, i));
    }
}
console.log(set.size);
