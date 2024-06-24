function factorialDivision(num1, num2) {

    let sumOne = 1;
    let sumTwo = 1;
    for (let currNumOne = 2; currNumOne <= num1; currNumOne++) {
        sumOne *= currNumOne;
    }

    for (let currNumTwo = 2; currNumTwo <= num2; currNumTwo++) {
        sumTwo *= currNumTwo;
    }


    let result = sumOne / sumTwo;
    console.log(result.toFixed(2));


}
factorialDivision(5, 2);
factorialDivision(6, 2);