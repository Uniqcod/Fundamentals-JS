function equalArrays(arr1, arr2) {

    let currIndex = 0;
    let sum = 0;

    for (let i = 0; i < arr1.length; i++){
       

        if (arr1[i].includes(arr2[i])){
            sum += Number(arr1[i]);
            currIndex++;
        } else {
            console.log(`Arrays are not identical. Found difference at ${currIndex} index`);
            return;
        }
    }
    console.log(`Arrays are identical. Sum: ${sum}`);

}
// equalArrays(['10', '20', '30'],

//     ['10', '20', '30']);
// equalArrays(['1', '2', '3', '4', '5'],

//     ['1', '2', '4', '4', '5']);
equalArrays(['1'], ['10']);