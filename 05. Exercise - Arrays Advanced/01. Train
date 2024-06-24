function train(arr) {
  let newArr = arr.shift().split(" ").map(Number);   
  let maxCapacity = Number(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    let currComand = arr[i];
    let fullCommand = currComand.split(" ");
    let command = fullCommand.shift();
    let amount = Number(fullCommand.shift());

    if (command === `Add`) {
      newArr.push(amount);
    } else {
      for (let i = 0; i < newArr.length; i++) {
        let currWagon = newArr[i];
        let amount = Number(currComand);
        let fullMaxWagon = currWagon + amount;
        if(fullMaxWagon <= maxCapacity){
            newArr.splice(i, 1, fullMaxWagon)
            break;
        }
        
      }
    }
  }
  console.log(newArr.join(' '));
}
train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);
