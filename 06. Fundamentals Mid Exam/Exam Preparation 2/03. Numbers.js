function numbers(numbers) {
  let arrNum = numbers.split(" ").map(Number);
  let sum = 0;
  let newArr = [];

  for (const num of arrNum) {
    sum += num;
  }
  let avarageValue = sum / arrNum.length;

  for (const num of arrNum) {

      if (num > avarageValue) {
        newArr.push(num);
    }
  }
  if(newArr.length === 0){
    console.log(`No`);
  }else{
    let sortedNum = newArr.sort((a, b) => b - a);
    top5Num = sortedNum.splice(0, 5);
    console.log(top5Num.join(' '));
  }
}
// numbers("10 20 30 40 50");
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
// numbers('1');
// numbers('-1 -2 -3 -4 -5 -6');
