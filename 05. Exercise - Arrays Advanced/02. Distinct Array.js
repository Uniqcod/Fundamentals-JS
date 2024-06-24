function arrayAdvanced(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let currNum = arr[i];
    if (result.includes(currNum)) {
      result.splice(i, 1);
    }else{
        result.push(currNum);
    }
  }
  console.log(result.join(' '));
}
arrayAdvanced([1, 2, 3, 4]);
arrayAdvanced([7, 8, 9, 7, 2, 3, 4, 1, 2]);
arrayAdvanced([20, 8, 12, 13, 4, 4, 8, 5]);
