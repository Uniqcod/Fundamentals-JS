function equalSums(arr) {
    let isFound = false;

    for (let i = 0; i < arr.length; i++) {
        let sumToRight = 0;
        let sumToLeft = 0;

        for (let j = i + 1; j < arr.length; j++) {
            let numsToRight = arr[j];
            sumToRight += numsToRight;
        }

        for (let k = 0; k < i; k++) {
            let numsToLeft = arr[k];
            sumToLeft += numsToLeft;
        }

        if (sumToLeft === sumToRight) {
            console.log(i);
            isFound = true;
            break;
        }
    }
    if(isFound === false){
        console.log(`no`);
    }
}
equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);