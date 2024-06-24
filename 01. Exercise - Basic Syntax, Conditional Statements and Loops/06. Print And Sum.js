function printAndSum (start, end){
    let allNum = '';
    let sum = 0;

    for (let currNum = start; currNum <= end; currNum++){
        allNum += currNum + ' ';
        sum += currNum;
    }

    console.log(allNum);
    console.log(`Sum: ${sum}`);
}
printAndSum (5, 10);
printAndSum (0, 26);
printAndSum (50, 60);