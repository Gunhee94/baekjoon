const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

class Queue {
    constructor(arr) {
        this.arr = arr;
    }
    s_push(num) {
        this.arr.push(num);
    }
    s_pop() {
        let data = this.arr.shift();
        if (!data) return -1;
        return data;
    }
    s_empty() {
        if (this.arr.length > 0) {
            return 0;
        } else {
            return 1;
        }
    }
    s_size() {
        return this.arr.length;
    }
}

const arr = Array(Number(input))
    .fill(1)
    .map((a, b) => a + b);
let queue = new Queue(arr);

while (queue.s_size() !== 1) {
    queue.s_pop();
    queue.s_push(queue.s_pop());
}

console.log(queue.s_pop());
