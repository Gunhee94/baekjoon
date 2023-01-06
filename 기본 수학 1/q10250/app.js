const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 1; i < input.length; i++) {
    let [H, W, V] = input[i].split(" ");

    let count = 0;
    let layer, room;
    for (let i = 1; i <= W; i++) {
        for (let j = 1; j <= H; j++) {
            count++;
            layer = j;
            room = i < 10 ? String(i).padStart(2, "0") : i;

            if (String(count) === V) {
                console.log(String(layer) + String(room));
            }
        }
    }
}
