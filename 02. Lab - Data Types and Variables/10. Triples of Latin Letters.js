function triplesOfLatinLet(numStr) {
    let number = Number(numStr);

    for (let a = 0; a < number; a++) {
        for (let b = 0; b < number; b++) {
            for (let c = 0; c < number; c++) {

                let letterA = String.fromCharCode(97 + a);
                let letterB = String.fromCharCode(97 + b);
                let letterC = String.fromCharCode(97 + c);
                
                let rows = letterA + letterB + letterC;
                console.log(rows);
            }
        }
    }
}
// triplesOfLatinLet('2');
triplesOfLatinLet ('3');

// console.log(String.fromCharCode (97 + b));