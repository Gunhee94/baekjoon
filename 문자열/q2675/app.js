const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i=1; i<input.length; i++) {
    let [count, str] = input[i].trim().split(" ");
    let strSplit = str.split("");

    let newStr = "";
    for (let j=0; j<strSplit.length; j++) {
        for (let k=0; k<count; k++) {
            newStr += strSplit[j];
        }
    }
    
    console.log(newStr)
}