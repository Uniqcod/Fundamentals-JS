function firstAndLastKNums(arr) {
  let k = arr.shift();

  let firstK = arr.slice(0, k);
  let lastK = arr.slice(-k);

  console.log(firstK.join(' '));
  console.log(lastK.join(' '));
}
firstAndLastKNums([2, 7, 8, 9]);

firstAndLastKNums([3, 6, 7, 8, 9]);
