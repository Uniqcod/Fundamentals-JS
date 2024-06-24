function evenAndOdd(array) {

    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < array.length; i++) {
        let number = Number(array[i]);

        if (number % 2 === 0) {
            sumEven += number;
        } else {
            sumOdd += number;
        }
    }
    let diff = sumEven - sumOdd;
    console.log(diff);
}
evenAndOdd([1, 2, 3, 4, 5, 6]);
evenAndOdd([3, 5, 7, 9]);
evenAndOdd([2, 4, 6, 8, 10]);