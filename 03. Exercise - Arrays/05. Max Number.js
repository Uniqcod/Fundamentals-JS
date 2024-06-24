function maxNum(array) {

    let topNums = [];

    for (let i = 0; i < array.length; i++) {
        let currNum = array[i];
        let isTop = true;

        for (let j = i + 1; j < array.length; j++) {
            let numToRight = array[j];

            if (currNum <= numToRight) {
                isTop = false;
                break;
            } else {
                isTop = true;
            }
        }
        if(isTop){
            topNums.push(currNum)
        }
    }
    console.log(topNums.join(' '));

}
maxNum([1, 4, 3, 2]);
maxNum([14, 24, 3, 19, 15, 17]);
