const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n')

input.forEach((data, index) => {
    if (index > 0) {
        let [num1, num2] = data.split(" ");
        console.log(`Case #${index}:`, Number(num1), "+", Number(num2), "=", Number(num1) + Number(num2))
    }
});
