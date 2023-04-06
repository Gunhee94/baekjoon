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
    let [age, name] = input[i]
        .toString()
        .trim()
        .split(" ")
        .map((e) => e);
    let ob = [];
    ob.age = age;
    ob.name = name;
    ob.i = i;
    arr.push(ob);
}

arr.sort((a, b) => {
    if (a.age === b.age) {
        return a.i - b.i;
    } else {
        return a.age - b.age;
    }
});

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].age, arr[i].name);
}
