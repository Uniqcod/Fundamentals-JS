function negativeOrPositiveNums(arr) {

    let result = [];
    // let elements = arr.split(' ');

    for (let i = 0; i < arr.length; i++){
        let currEl = arr[i];

        if(currEl >= 0){
            result.push(currEl);
        }else{
            result.unshift(currEl);
        }
    }
    console.log(result.join(`\n`));

}

negativeOrPositiveNums(["7", "-2", "8", "9"]);
negativeOrPositiveNums(["3", "-2", "0", "-1"]);
