function sumFirstAndLast(arr) {
    
    const firstEl = Number(arr.shift());
    const lastEl = Number(arr.pop());

    const sum = firstEl + lastEl;
    console.log(sum);
}
sumFirstAndLast(["20", "30", "40"]);
sumFirstAndLast(["5", "10"]);
