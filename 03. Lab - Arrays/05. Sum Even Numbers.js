function sumEvenNum (arr){
    let sum = 0;

    for (let i = 0; i < arr.length; i++){
        let num = Number(arr[i]);

        if (num % 2 === 0){
            sum += num;
        } 
    }
    console.log(sum);

}
sumEvenNum (['1','2','3','4','5','6']);
sumEvenNum (['3','5','7','9']);
sumEvenNum (['2','4','6','8','10']);

