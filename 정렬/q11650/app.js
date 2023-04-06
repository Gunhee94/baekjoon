const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((e) => e);

let arr = [];
for (let i = 1; i <= input[0]; i++) {
    arr.push(
        input[i]
            .toString()
            .trim()
            .split(" ")
            .map((e) => Number(e))
    );
}

arr.sort((a, b) => {
    if (a[0] === b[0]) {
        return a[1] - b[1];
    } else {
        return a[0] - b[0];
    }
});

let ans = [];

for (let i = 0; i < input[0]; i++) {
    let answer = arr[i].join(" "); // for 문 안에서 log 를 찍으면 시간이 오래걸린다.
    ans.push(answer);
}

console.log(ans.join("\n")); //console.log 는 한번만 사용하기 위해 join 을 사용함
