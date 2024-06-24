function smallerTwoNums(arr){

    let newArr = arr.sort((a, b) => a - b);
    let result = newArr.slice(0, 2);
    console.log(result.join(' '));
}
smallerTwoNums([30, 15, 50, 5]);
smallerTwoNums([3, 0, 10, 4, 7, 3]);