function burgerBus(arr) {
  let countCity = Number(arr.shift());
  let currCountCity = 0;
let moneyFromTrip = 0;

  while (currCountCity !== countCity) {

      let moneyFromCity = 0;
      let city = arr.shift();
      let earnedMoney = Number(arr.shift());
      let expensesMoney = Number(arr.shift());
      currCountCity++;

      if (currCountCity % 3 === 0) {
        expensesMoney += expensesMoney / 2;
      }

      if (currCountCity % 5 === 0) {
        let removedMobey = earnedMoney * 0.1;
        earnedMoney = earnedMoney - removedMobey;
      }

      moneyFromCity = earnedMoney - expensesMoney;
      moneyFromTrip += moneyFromCity
      console.log(
        `In ${city} Burger Bus earned ${moneyFromCity.toFixed(2)} leva.`
      );
  }
  console.log(`Burger Bus total profit: ${moneyFromTrip.toFixed(2)} leva.`);
}
burgerBus([
  "3",
  "Sofia",
  "895.67",
  "213.50",
  "Plovdiv",
  "2563.20",
  "890.26",
  "Burgas",
  "2360.55",
  "600.00",
]);
burgerBus([
  "5",
  "Lille",
  "2226.00",
  "1200.60",
  "Rennes",
  "6320.60",
  "5460.20",
  "Reims",
  "600.20",
  "452.32",
  "Bordeaux",
  "6925.30",
  "2650.40",
  "Montpellier",
  "680.50",
  "290.20",
]);
burgerBus ([
    `5`, 
    `FirstCity`, 
    `100`, 
    `20`,
    `SecondCity`, 
    `500`, 
    `10`, 
    `ThreeCity`, 
    `1000`, 
    `800`,
    `FourCity`, 
    `200`,
    `90`,
    `FiveCity`,
    `1000`,
    `80`
])
