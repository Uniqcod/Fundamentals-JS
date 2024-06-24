function smallerOfThreeNum(num1, num2, num3) {

    let isSmaller = false;
    let minNum = 0;

    const smalleroneOrTwo = (x, y) => x < y;
    const num1Smaller = smalleroneOrTwo(num1, num2);
    
    if(num1Smaller === true){
        minNum = num1;
    } else{
        minNum = num2;
    }

    const smallerThree = (x, y) => x < y;
    const num3Smaller = smallerThree(minNum, num3);
  

    if (num3Smaller === true) {
        minNum
    } else{
        minNum = num3;
    }

    console.log(minNum);

}
// smallerOfThreeNum(2, 5, 3);
// smallerOfThreeNum(600, 342, 123);
// smallerOfThreeNum(25, 21, 4);
// smallerOfThreeNum(2, 2, 2);
smallerOfThreeNum(3, 2, 5);
