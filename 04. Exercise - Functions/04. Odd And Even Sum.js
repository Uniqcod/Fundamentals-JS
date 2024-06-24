function oddAndEvenSum(number){

    let numToStr = number.toString()
    let evenSum = 0;
    let oddSum = 0;
    for(let i = 0; i < numToStr.length; i++){
        const curChar = Number(numToStr[i]);

        if(curChar % 2 === 0){
            evenSum += curChar;
        }else{
            oddSum += curChar;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`); 
}
oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);