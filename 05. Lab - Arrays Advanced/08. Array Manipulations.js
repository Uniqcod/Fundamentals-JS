function arrayManipulator(arr) {
    let newArray = arr.shift().split(' ').map(Number);      

    for(let i = 0; i < arr.length; i++){
        let currComand = arr[i];
        let fullCommand = currComand.split(' ');
        let command = fullCommand.shift();
        let amount = Number(fullCommand.shift());
        let index = Number(fullCommand.shift());
    
        if(command === `Add`){
            newArray.push(amount);
        } else if(command === `Remove`){
                newArray = newArray.filter((nums) => nums !== amount);         
        }else if(command === `RemoveAt`){
            newArray.splice(amount, 1);
        }else if(command === `Insert`){
            newArray.splice(index, 0, amount);
        }
    }
    console.log(newArray.join(' '));
}
arrayManipulator(["4 19 2 53 6 43", "Add 3", "Remove 2", "RemoveAt 1", "Insert 8 3",]);
arrayManipulator(["6 12 2 65 6 42", "Add 8", "Remove 12", "RemoveAt 3", "Insert 6 2",]);
