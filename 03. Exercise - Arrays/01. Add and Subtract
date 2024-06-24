function addAndSubtract(arr) {

    let newArr = [];
    let originalSum = 0;
    let newSum = 0;

    for (let i = 0; i < arr.length; i++) {
        originalSum += Number(arr[i]);


        if (arr[i] % 2 === 0) {
            let evenSum = Number(arr[i] + i);
            newArr.push(evenSum);
            newSum += evenSum;
        } else {
            let oddSum = Number(arr[i] - i);
            newArr.push(oddSum);
            newSum += oddSum;
        }
    }
    console.log(newArr);
    console.log(originalSum);
    console.log(newSum);

}
addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);
