function numbers(arr) {
let allNumbers = arr.shift().split(' ').map(Number);

while (arr[0] !== "Finish"){
    
    let token = arr.shift().split(' ');
    let action = token.shift();
    let num = Number(token.shift());

        if(action === `Add`){
            allNumbers.push(num);

        }else if(action === `Remove`){
            let index = allNumbers.indexOf(num);
            if(index !== -1){
                allNumbers.splice(index, 1);
            }
        }else if(action === `Replace`){
            let replacedNum = Number(token.shift());
            let index = allNumbers.indexOf(num);
            if(index !== -1){
                allNumbers.splice(index, 1, replacedNum);
            }
        }else if(action === `Collapse`){
            let check = allNumbers.filter((a) => a > num);
            allNumbers = check;
        }
    }
    console.log(allNumbers.join(' '));
}
numbers(["1 4 5 19", "Add 1", "Remove 4", "Finish"]);
numbers(["1 20 -1 10", "Collapse 8", "Finish"]);
numbers(["5 9 70 -56 9 9", "Replace 9 10", "Remove 9", "Finish"]);
