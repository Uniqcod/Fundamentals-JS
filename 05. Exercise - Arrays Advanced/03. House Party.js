function houseParty(arr) {
  let finalList = [];

for(let command of arr){
   let token = command.split(' ');
    let name = token.shift();

    if (token.includes(`not`)) {
      if (finalList.includes(name)) {
        let index = finalList.indexOf(name);
        finalList.splice(index, 1);
      } else {
        console.log(`${name} is not in the list!`);
      }

    } else {
      if (finalList.includes(name)) {
        console.log(`${name} is already in the list!`);
      } else {
        finalList.push(name);
      }
    }
  }
  console.log(finalList.join(`\n`));
}
houseParty([
  "Allie is going!",

  "George is going!",

  "John is not going!",

  "George is not going!",
]);
houseParty([
  "Tom is going!",

  "Annie is going!",

  "Tom is going!",

  "Garry is going!",

  "Jerry is going!",
]);
