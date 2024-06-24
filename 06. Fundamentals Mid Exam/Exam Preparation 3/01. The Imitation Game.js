function theImitationGame(arr) {
  let message = arr.shift().split("");

  for (const command of arr) {
    let token = command.split("|");
    let action = token.shift();

    if (action == `Decode`) {
      break;
    } else {
      if (action === `Move`) {
        let index = Number(token.shift());
        let movedletter = message.splice(0, index);
        message = message.concat(movedletter);
      } else if (action === `Insert`) {
        let index = Number(token.shift());
        let letter = token.shift();
        message.splice(index, 0, ...letter);
      } else if (action === `ChangeAll`) {
        let removeLetter = token.shift();
        let needLetter = token.shift();

        for (let i = 0; i < message.length; i++) {
          if (message[i] === removeLetter) {
            message[i] = needLetter;
          }
        }
      }
    }
  }
  console.log(`The decrypted message is: ${message.join("")}`);
}
// theImitationGame([
//   "zzHe",
//   'ChangeAll|z|l',
//   "Insert|2|o",
//   "Move|3",
//   "Decode",
// ]);

theImitationGame([
  "owyouh",
    "Move|2",
    "Move|3",
  "Insert|3|are",
  "Insert|9|?",
  "Decode",
]);
