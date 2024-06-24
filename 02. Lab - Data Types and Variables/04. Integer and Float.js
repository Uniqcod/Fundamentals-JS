function integerOrFloat (firstNum, secondNum, thirdNum){
let sum = firstNum + secondNum + thirdNum;
sum % 1 === 0 ? sum += " - Integer" : sum += " - Float";
console.log(sum);
}
integerOrFloat (9, 100, 1.1);
integerOrFloat (100, 200, 303);