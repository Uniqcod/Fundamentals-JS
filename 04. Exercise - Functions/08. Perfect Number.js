function perfectNum(num){
    let sum = 0;

    for(let i = 1; i < num; i++){
        let currNum = i;

        if(num % currNum === 0){
            sum += currNum;
        }
    }
    if(num === sum){
        console.log("We have a perfect number!");
    }else{
        console.log("It's not so perfect.");
    }
}
perfectNum(6);
perfectNum(28);
perfectNum(1236498);