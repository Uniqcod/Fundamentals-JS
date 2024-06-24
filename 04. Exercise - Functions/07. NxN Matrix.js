function nXnMatrix(num){

    
    for(let columns = 1; columns <= num; columns++){
        let currNum = '';
        for(let rows = 1; rows <= num; rows++){
            currNum += num + ' '
        }
        console.log(currNum);
    }
}
nXnMatrix(3);
nXnMatrix(7);
nXnMatrix(2);