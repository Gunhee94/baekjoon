const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = [];

rl.on('line', function (line) {
    input.push(parseInt(line));
}).on('close', function() {
    const [x, y] = input;
    
    if (x > 0 && y > 0) {
        result = 1;
    } else if (x < 0 && y > 0) {
        result = 2;
    } else if (x < 0 && y < 0) {
        result = 3;
    } else {
        result = 4;
    }
    console.log(result);
    process.exit();
})