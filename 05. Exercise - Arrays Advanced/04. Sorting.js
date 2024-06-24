function sorting(arr) {
  let newArr = [];
  let sortArr = arr.sort((a, b) => b - a);

  while (sortArr.length > 0){
    let firstEl = sortArr.shift();
    newArr.push(firstEl);

    let lastEl = sortArr.pop();
    newArr.push(lastEl);
  }
  console.log(newArr.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
