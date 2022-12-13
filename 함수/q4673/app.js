let constructorArr = [];
for (let i = 1; i < 10000; i++) {
    let n = i;
    i = i < 10 ? "0" + i : i;
    let hab = i
        .toString()
        .split("")
        .reduce((acc, cur, i) => {
            return Number(acc) + Number(cur);
        }, 0);
    constructorArr.push(n + hab);
}

for (let i = 1; i < 10000; i++) {
    if (!constructorArr.includes(i)) {
        console.log(i);
    }
}
