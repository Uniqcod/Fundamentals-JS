function muOnline(arr) {
  let bitcoins = 0;
  let health = 100;

  let rooms = arr.split("|");

  for (let i = 0; i < rooms.length; i++) {
    const token = rooms[i].split(" ");
    const action = token.shift();
    let amount = Number(token.shift());

    if (action === `potion`) {

      if (health + amount > 100) {
        amount = 100 - health;
    }
        health += amount;

      console.log(`You healed for ${amount} hp.`);
      console.log(`Current health: ${health} hp.`);


    } else if (action === `chest`) {
      bitcoins += amount;
      console.log(`You found ${amount} bitcoins.`);


    } else {
      health -= amount;
      
      if (health <= 0) {
        console.log(`You died! Killed by ${action}.`);
        console.log(`Best room: ${i + 1}`);
        return;

      } else {
        console.log(`You slayed ${action}.`);
      }
    }
  }
  console.log(`You've made it!`);
  console.log(`Bitcoins: ${bitcoins}`);
  console.log(`Health: ${health}`);
}
// muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
