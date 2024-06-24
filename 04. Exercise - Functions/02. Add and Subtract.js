function addAndSubtract (numOne, numTwo, numThree){

const sum = (x, y) => x + y;
const amount = sum(numOne, numTwo); 

const subtract = (x, y) => amount - y;
const deduct = subtract(amount, numThree);

console.log(deduct);

}
addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);
addAndSubtract(173, 2, 200);