function manOWar(arr) {
  let pirateShip = arr.shift().split(">").map(Number);
  let warShip = arr.shift().split(">").map(Number);

  let totalIndexPirateShip = pirateShip.length - 1;
  let totalIndexWarShip = warShip.length - 1;

  let maxHealth = Number(arr.shift());
  let minHeailh = maxHealth * 0.2;

  for (let command of arr) {
    let token = command.split(" ");
    let cmd = token.shift();

    if (cmd === `Fire`) {
      let index = Number(token.shift());
      let warShipDmg = Number(token.shift());

      if (index <= totalIndexWarShip) {
        if (warShip[index] - warShipDmg < 0) {
          warShip[index] = 0;
        } else {
          warShip[index] -= warShipDmg;
        }

        if (warShip.includes(0)) {
          console.log(`You won! The enemy ship has sunken.`);
          return;
        }
      }
    } else if (cmd === `Defend`) {
      let startIndex = Number(token.shift());
      let endIndex = Number(token.shift());
      let pirateShipDmg = Number(token.shift());

      if (
        startIndex <= totalIndexPirateShip &&
        endIndex <= totalIndexPirateShip
      ) {
        for (let i = startIndex; i <= endIndex; i++) {
          if (pirateShip[i] - pirateShipDmg < 0) {
            pirateShip[i] = 0;
          } else {
            pirateShip[i] -= pirateShipDmg;
          }
          if (pirateShip.includes(0)) {
              console.log(`You lost! The pirate ship has sunken.`);
              return;
        }
        }
      }
    } else if (cmd === `Repair`) {
      let index = Number(token.shift());
      let hp = Number(token.shift());

      if (index <= totalIndexPirateShip) {
        if (pirateShip[index] + hp > maxHealth) {
          pirateShip[index] = maxHealth;
        } else {
          pirateShip[index] += hp;
        }
      }
    } else if (cmd === `Status`) {
        let needRepair = 0;
      for (let cmd of pirateShip) {
        if (cmd < minHeailh) {
            needRepair++;
        }
      }
      console.log(`${needRepair} sections need repair.`);

    }else if(cmd === `Retire`){
        let pirateShipSum = 0;
        for(let num of pirateShip){
            pirateShipSum += num;
        }
        let warShipSum = 0;
        for(let num of warShip){
            warShipSum += num;
        }
        console.log(`Pirate ship status: ${pirateShipSum}`);
        console.log(`Warship status: ${warShipSum}`);
    }
  }
}
manOWar([
  "12>13>11>20>66",
  "12>22>33>44>55>32>18",
  "70",
  "Fire 2 11",
  "Fire 8 100",
  "Defend 3 6 11",
  "Defend 0 3 5",
  "Repair 1 33",
  "Status",
  "Retire",
]);
manOWar([
  "2>3>4>5>2",
  "6>7>8>9>10>11",
  "20",
  "Status",
  "Fire 2 3",
  "Defend 0 4 11",
  "Repair 3 18",
  "Retire",
]);
