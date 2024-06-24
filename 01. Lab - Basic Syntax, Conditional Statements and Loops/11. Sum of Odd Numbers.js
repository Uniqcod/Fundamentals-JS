function solve(n) {
    let count = 0;
    let sum = 0;

    for (let i = 1; i <= 100; i++) {
        if (i % 2 !== 0) {
            count++;
            if (count <= n) {
                console.log(i);
                sum += i;
            }
        }
    }
    console.log(`Sum: ${sum}`);
}
solve(3);
