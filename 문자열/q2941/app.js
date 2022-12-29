const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let alpa of croatia) {
    
    input = input.split(alpa).join("Q");
    // croatia 에 해당하는 문자열이 존재하면 Q로 바꿔서 input을 바꾸기  
}

console.log(input.length)