function bombNumbers(arr, bomb) {
    let bombNumber = bomb[0];
    let powerbomb = bomb[1];
  
    while (arr.includes(bombNumber)) {
        let index = arr.indexOf(bombNumber);
        let start = Math.max(0, index - powerbomb);
        let count = 2 * powerbomb + 1;
        arr.splice(start, count);
    }

    let sum = 0;
    for (let num of arr) {
        sum += num;
    }

    console.log(sum);
}

// bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]); // Output: 12
// bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);    // Output: 14
// bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);       // Output: 6
// bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]); // Output: 5
bombNumbers([1, 4, 12, 34, 8, 4, 5], [4, 1]); // Output: 4
