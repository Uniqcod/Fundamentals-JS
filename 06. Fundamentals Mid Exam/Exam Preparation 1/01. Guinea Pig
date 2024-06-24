function guineaPig(arr) {
  let food = Number(arr[0]) * 1000;
  let hay = Number(arr[1]) * 1000;
  let cover = Number(arr[2]) * 1000;
  let weight = Number(arr[3]) * 1000;

  let dayInMonth = 30;

  for (let day = 1; day <= dayInMonth; day++) {
    if (food > 300) {
      food -= 300;
    } else {
        console.log("Merry must go to the pet store!");
      return;
    }

    if (day % 2 === 0) {
      let spendHay = food * 0.05;
      if (hay > spendHay) {
        hay -= spendHay;
      } else {
        console.log("Merry must go to the pet store!");
        return;
      }
    }

    if (day % 3 === 0) {
      let spendCover = weight / 3;
      if (cover > spendCover) {
        cover -= spendCover;
      } else {
        console.log("Merry must go to the pet store!");
        return;
      }
    }
  }
  console.log(`Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`);
}
guineaPig(["10", "5", "5.2", "1"]);
guineaPig(["1", "1.5", "3", "1.5"]);
guineaPig(["9", "5", "5.2", "1"]);
