function gladiatorInventory(arr) {

    let inventory = arr.shift().split(' ');

    for(let cmd = 0; cmd < arr.length; cmd++){
        let currCommmand = arr[cmd];
        let token = currCommmand.split(' ');
        let command = token.shift();
        let eqipment = token.shift();

        if(command === `Buy`){
            let checkInventory = inventory.indexOf(eqipment);
            if(checkInventory === -1){
                inventory.push(eqipment);
            }

        }else if(command === `Trash`){
            let checkInventory = inventory.indexOf(eqipment);
            if(checkInventory !== -1){
                inventory.splice(checkInventory, 1);
            }

        }else if(command === `Repair`){
            let checkInventory = inventory.indexOf(eqipment);
            if(checkInventory !== -1){
                inventory.splice(checkInventory, 1);
                inventory.push(eqipment);
            }

        }else if(command === `Upgrade`){
            let upgradeInventory = eqipment.split('-');
            let weapon = upgradeInventory.shift();
            let upgrade = upgradeInventory.shift();

            let checkInventory = inventory.indexOf(weapon);

            if(checkInventory !== -1){
                inventory.splice(checkInventory + 1, 0, `${weapon}:${upgrade}`);
            }
        }
    }
    console.log(inventory.join(' '));
}
gladiatorInventory([
  "SWORD Shield Spear",

  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);

gladiatorInventory([
  "SWORD Shield Spear",

  "Trash Bow",
  "Repair Shield",
  "Upgrade Helmet-V",
]);
