const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s+/);

let hour = Number(input[0]);
let minute = Number(input[1]);
let requireTime = Number(input[2]);

if (minute + requireTime >= 60) {
    let endTime = hour * 60 + minute + requireTime;
    hour = Math.floor(endTime / 60);  
    if (endTime >= 1440) {
        hour = hour - 24;
    }
    minute = endTime % 60;
} else {
    minute = minute + requireTime;
}

console.log(hour, minute);
