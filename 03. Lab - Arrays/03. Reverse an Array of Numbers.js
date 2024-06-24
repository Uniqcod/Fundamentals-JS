function reverseAnArrayOfNum(num, arr) {

    let result = [];

    for (let i = 0; i < num; i++) {
        result[i] = arr[i];
    }

    const reversed = [];
    for (let i = num - 1; i >= 0; i--) {
        reversed[reversed.length] = result[i];
    }
    console.log(reversed.join(" "));

}
reverseAnArrayOfNum(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNum(4, [-1, 20, 99, 5]);
reverseAnArrayOfNum(2, [66, 43, 75, 89, 47]);