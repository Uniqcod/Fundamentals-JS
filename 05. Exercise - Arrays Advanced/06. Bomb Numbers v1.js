function bombNumbers(arr, bomb) {
  let bombNumber = Number(bomb.shift());
  let powerbomb = Number(bomb);
  if (powerbomb < 0) {
    powerbomb = 0;
}
let sum = 0;
let isFound = false;

for (let i = 0; i < arr.length; i++) {
    if(isFound === true){
        i = 0;
    }
    isFound = false;
    let currNum = arr[i];
    
    if (currNum === bombNumber) {
        let leftIndex = i - powerbomb;
        let rightIndex = 2 * powerbomb + 1;
        arr.splice(leftIndex, rightIndex);
        isFound = true;
    }
    if(isFound === true){
        i = 0;
    }
}
  for (num of arr) {
    sum += num;
  }
  console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);

bombNumbers([1, 1, 2, 4, 1, 1, 2, 4, 1, 1, 1], [4, 1]);

