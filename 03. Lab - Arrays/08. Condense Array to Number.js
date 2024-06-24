function condenseArrayToNum(arr){
   
    let result = [];

    while (arr.length > 1){

        for (let i = 0; i < arr.length-1; i++){
            let currSum = Number(arr[i] + arr[i+1])
            result.push(currSum); 
        }
        arr = result;
        result = [];
    }
    console.log(arr.join(''));
}
condenseArrayToNum ([2,10,3]);
// condenseArrayToNum ([5,0,4,1,2]);
// condenseArrayToNum ([1]);