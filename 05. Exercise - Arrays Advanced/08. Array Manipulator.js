function arrayMultiplator(arr, command) {

  for (cmd of command) {
    let token = cmd.split(" ");
    let action = token.shift();

    if (action === `add`) {
      let index = Number(token.shift());
      let num = Number(token.shift());

      arr.splice(index, 0, num);

    } else if (action === `addMany`) {
      let index = Number(token.shift());

      for(element of token){
        let num = Number(element);
          arr.splice(index, 0, num);
          index++;
      }

    } else if (action === `contains`) {
      let num = Number(token.shift());
      console.log(arr.indexOf(num));

    } else if (action === `remove`) {
      let index = Number(token.shift());
      arr.splice(index, 1);

    } else if (action === `shift`) {
      let position = Number(token.shift());

      for(let rotation = 1; rotation <= position; rotation++){
        let firstEl = arr.shift();
        arr.push(firstEl);
      }

    } else if (action === `sumPairs`) {
        let sumArr = [];
      for(let i = 0; i < arr.length; i += 2){
        let firstNum = arr[i];
        let secondNum = arr[i + 1];
        if(secondNum === undefined){
            secondNum = 0;
        }
        let sum = firstNum + secondNum;
        sumArr.push(sum);
      }
      arr = sumArr;

    } else if (action === `print`) {
      console.log(`[ ${arr.join(', ')} ]`);
      return;
    }
  }
}
arrayMultiplator(
  [1, 2, 4, 5, 6, 7],
  ["add 1 8", "contains 1", "contains 3", "print"]
);

arrayMultiplator(
  [1, 2, 3, 4, 5],
  ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
);
// arrayMultiplator(
//     [1, 2, 3, 4, 5],
//     ["sumPairs",]
//   );