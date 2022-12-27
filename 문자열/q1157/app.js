const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().toUpperCase().trim().split("");

let arr = [];
let manyAlpa = "";
for (let i=0; i<input.length; i++) {
    if (!manyAlpa.includes(input[i])) {
        manyAlpa += input[i];
        arr.push({alpa : input[i], count : 1});
    } else {
        arr.find((data)=>{
            if (data.alpa === input[i]) {
                data.count++;
            }
        })
    }
}

let maxNum = 0;
let result;
for (let i=0; i<arr.length; i++) {
    if (maxNum === arr[i].count) {
        result = "?";
    }
    if (maxNum < arr[i].count) {
        maxNum = arr[i].count;
        result = arr[i].alpa;
    }
}
console.log(result)