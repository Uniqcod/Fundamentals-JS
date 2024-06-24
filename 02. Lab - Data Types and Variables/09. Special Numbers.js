function specialsNumber(num) {
    let sum = 0;

    for (let currNum = 1; currNum <= num; currNum++) {
        let currNumStr = currNum.toString();

        if (currNum < 10) {

            if (currNum === 5 || currNum === 7) {
                console.log(`${currNum} -> True`);
            } else {
                console.log(`${currNum} -> False`);
            }

        } else {

            for (let i = 0; i < currNumStr.length; i++) {
                sum += parseInt(currNumStr[i], 10);
            }
            if (sum === 5 || sum === 7 || sum === 11) {
                console.log(`${currNum} -> True`);
            } else {
                console.log(`${currNum} -> False`);
            }
            sum = 0;
        }
    }
}
specialsNumber(15);
// specialsNumber(20);

