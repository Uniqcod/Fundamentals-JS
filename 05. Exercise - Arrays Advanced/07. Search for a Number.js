function searchForNumber(arr, specialArr) {
  let numsCount = specialArr[0];
  let removeNums = specialArr[1];
  let specialNum = specialArr[2];

  let count = 0;

  let splicedArr = arr.slice(0, numsCount);
  splicedArr.splice(0, removeNums);
  let foundNum = 0;

  for (let num of splicedArr) {
    if(num === specialNum){
        count++;
    }
  }
  console.log(`Number ${specialNum} occurs ${count} times.`);
}
searchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForNumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);
