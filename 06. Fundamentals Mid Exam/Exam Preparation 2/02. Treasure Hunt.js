function treasureHunt(arr) {
  let treasureChest = arr.shift().split("|");
  let sumTreasureCredit = 0;

  let command = arr.shift().split(" ");
  let active = command.shift();

  while (active !== `Yohoho!`) {
    if (active === `Loot`) {
      for (let treasure of command) {
        if (treasureChest.includes(treasure)) {
          continue;
        } else {
          treasureChest.unshift(treasure);
        }
      }
    } else if (active === `Drop`) {
      let indexRemoved = Number(command.shift());
      if (indexRemoved >= 0 && indexRemoved < treasureChest.length) {
        let removedTreasure = treasureChest.splice(indexRemoved, 1);
        treasureChest.push(removedTreasure.join(""));
      }
    } else if (active === `Steal`) {
      let steelCount = Number(command.shift());

      if (steelCount <= treasureChest.length) {
        let steelTreasure = treasureChest.splice(-steelCount);
        console.log(steelTreasure.join(", "));
      } else {
        steelCount = treasureChest.length;
        let steelTreasure = treasureChest.splice(-steelCount);
        console.log(steelTreasure.join(", "));
      }
    }
    command = arr.shift().split(" ");
    active = command.shift();
  }


  if (treasureChest.length <= 0) {
    console.log(`Failed treasure hunt.`);
  } else {

    for (const treasure of treasureChest) {
      sumTreasureCredit += treasure.length;
    }
    let totalCredit = sumTreasureCredit / treasureChest.length;

    console.log(
      `Average treasure gain: ${totalCredit.toFixed(2)} pirate credits.`
    );
  }
}
treasureHunt([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!",
]);
treasureHunt([
  "Diamonds|Silver|Shotgun|Gold",
  "Loot Silver Medals Coal",
  "Drop -1",
  "Drop 1",
  "Steal 6",
  "Yohoho!",
]);
