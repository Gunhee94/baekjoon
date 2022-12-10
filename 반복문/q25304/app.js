const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n')

let hab = 0;

input.forEach((data, index) => {
    if (index > 1) {
        let [price, num] = data.split(" ");
        hab += Number(price) * Number(num);
    }
});

Number(input[0]) === hab ? console.log("Yes") : console.log("No");