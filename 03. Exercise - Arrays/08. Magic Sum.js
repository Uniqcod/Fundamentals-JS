function magicSum(arr, magicNum) {
    let rightNumArr = [];

    for (let i = 0; i < arr.length; i++) {
        let num1 = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            let num2 = arr[j];
            let sum = 0;

            sum = num1 + num2;

            if (sum === magicNum) {
                rightNumArr.push(num1, num2);
            }
        }
    }

    for (let k = 0; k < rightNumArr.length; k += 2) {
        let firstPair = rightNumArr[k];
        let secondPair = rightNumArr[k + 1];
        console.log(`${firstPair} ${secondPair}`);
    }
}
magicSum([1, 7, 6, 2, 19, 23], 8);
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
magicSum([1, 2, 3, 4, 5, 6], 6);
