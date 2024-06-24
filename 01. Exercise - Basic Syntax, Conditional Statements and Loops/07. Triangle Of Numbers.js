function triangleNum(num) {
    let rowStr = ``;
    let current = 1;


    for (let column = 1; column <= num; column++) {
        for (let rows = 1; rows <= column; rows++) {

            rowStr += current + ` `;
        }
        current++;
        console.log(rowStr);
        rowStr = ``;
    }
}
// triangleNum(3);
// triangleNum (5);
triangleNum(6);