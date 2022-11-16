const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ').map(el => Number(el));

// A가 B보다 큰 경우에는 '>'를 출력한다.
// A가 B보다 작은 경우에는 '<'를 출력한다.
// A와 B가 같은 경우에는 '=='를 출력한다.

const A = input[0];
const B = input[1];

if (A == B) {
    console.log("==");
} else if (A > B) {
    console.log(">");
} else {
    console.log("<");
}

console.log(A == B ? "==" : A > B ? ">" : "<");