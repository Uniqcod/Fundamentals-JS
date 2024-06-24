function processOddNum(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let currNum = arr[i];

    if (i % 2 !== 0) {
      let newNum = currNum * 2;
      result.unshift(newNum);
    }
  }
  console.log(result.join(" "));
}
processOddNum([10, 15, 20, 25]);
processOddNum([3, 0, 10, 4, 7, 3]);
