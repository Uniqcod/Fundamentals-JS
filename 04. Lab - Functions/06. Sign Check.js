function signCheck(num1, num2, num3) {

    const multiply = (x, y, z) => x * y * z;
    let sum = multiply(num1, num2, num3)

    if (sum > 0){
        console.log(`Positive`);
    }else{
        console.log(`Negative`);
    }
}
signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);