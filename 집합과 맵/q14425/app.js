const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((e) => e);

let [N, M] = input[0].split(" ").map(Number);

let arr = [];
let setArr = [];
for (let i = 1; i <= N + M; i++) {
    if (i >= 1 && i <= N) {
        arr.push(input[i]);
    } else {
        setArr.push(input[i]);
    }
}

arr = new Set(arr);
let count = 0;
for (let i = 0; i < setArr.length; i++) {
    if (arr.has(setArr[i])) {
        count++;
    }
}

console.log(count);

// includes 와 has
// includes 보다 has 의 시간 복잡도
// includes : O(n)
// has : O(1)
// Set 은 집합을 구현하기 위한 자료 구조
// 집합 : 중복 값을 허용하지 않는 자료 구조, 중복 데이터가 없어야 할 때 유용
