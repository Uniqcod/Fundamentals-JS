function margeArray(arr1, arr2) {
    let evenSum = 0;
    let oddNum = 0;
    let result = [];

    for (let i = 0; i < arr1.length; i++){

        if (i % 2 === 0){
            evenSum = Number(arr1[i]) + Number(arr2[i]);
            result.push(evenSum);
        }else {
            oddNum = arr1[i] + arr2[i];
            result.push(oddNum);
        }
    }
    console.log(result.join(' - '));
}
margeArray(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']);

margeArray(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']);
