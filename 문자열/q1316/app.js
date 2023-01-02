const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let countGroupWord = 0;
for (let i = 1; i < input.length; i++) {
    const word = input[i];
    const letter = [];
    let isGroupWord = true;

    for (let j = 0; j < word.length; j++) {
        // 특정 문자열이 존재하지 않으면
        if (letter.indexOf(word[j]) === -1) {
            // letter 에 추가한다.
            letter.push(word[j]);
        } else {
            // 중복되지 않은 첫번째 요소의 인덱스 번호가 letter 배열에 쌓인 개수 -1 과 같지 않으면 :
            // letter 배열엔 이미 다른 요소가 쌓여서 길이가 늘어났는데 중복이 있다면 쌓이지 않았고
            // indexOf 로 첫번째 요소를 찾기 때문에 같지 않은 것을 false 로 바꿔버린다.
            // 단 한개라도 false 가 있다면 break로 반복을 멈춘다.
            if (letter.indexOf(word[j]) !== letter.length - 1) {
                isGroupWord = false;
                break;
            }
        }
    }
    if (isGroupWord) {
        countGroupWord += 1;
    }
}

console.log(countGroupWord);
