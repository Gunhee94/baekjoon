const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n')

const startNum = input[0] < 10 ? String("0") + input[0] : input[0];
let n = input[0] < 10 ? String("0") + input[0] : input[0];

let count = 0;
while (true) {
    count++;
    let [num1, num2] = n.split('');
    let hab = Number(num1) + Number(num2);
    if (hab >= 10) {
        hab = hab.toString().split('')[1];
    }
    let newNum = String(num2) + String(hab);
    n = newNum;
 
    if (startNum === n) {
        break;
    }
}

console.log(count)