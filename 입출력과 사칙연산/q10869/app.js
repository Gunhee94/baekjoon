// 한줄씩 입력받기 (공백을 기준으로)

const readline = require("readline");  //모듈가져오기

const rl = readline.createInterface({  //입출력을 위한 인터페이스 객체 생성
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
    // 한 줄씩 입력받은 후 실행할 코드
    // 입력된 값은 line에 저장된다.
    input = line.split(' ').map(el => parseInt(el)); //공백을 기준으로 값넣기
    rl.close();                      //필수!! close가 없으면 입력을 무한히 받는다.
});

rl.on('close', () => {
    console.log(input[0] + input[1]);
    console.log(input[0] - input[1]);
    console.log(input[0] * input[1]);
    console.log(parseInt(input[0] / input[1]));
    console.log(input[0] % input[1]);
    process.exit();   // 입력이 끝난 후 실행할 코드
})