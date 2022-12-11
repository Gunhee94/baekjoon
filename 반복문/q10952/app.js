const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n')

input.forEach((data, index) => {
    let [num1, num2] = data.split(" ");
    if (Number(num1) !== 0 && Number(num2) !== 0) {
        console.log(Number(num1) + Number(num2))
    }
    
});
