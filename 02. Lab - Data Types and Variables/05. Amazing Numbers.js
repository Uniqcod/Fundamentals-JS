function amazingNum (number){
let numStr = number.toString();
let sum = 0;

for (let i = 0; i < numStr.length; i++) {
    sum += Number(numStr[i]);    
}
let result = sum.toString().includes(9);
console.log(result ?
`${number} Amazing? True` :
`${number} Amazing? False`
);
}
amazingNum (1233);
amazingNum (999);