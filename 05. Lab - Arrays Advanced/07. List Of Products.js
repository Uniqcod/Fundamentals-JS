function listOfProducts(arr) {

    let productsArr = arr.sort();
    let listNums = 1; 
    
    for(let i = 0; i < productsArr.length; i++){
        let currProduct = productsArr[i];
        console.log(`${listNums}.${currProduct}`);
       listNums++;
    }
}
listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);
listOfProducts(["Watermelon", "Banana", "Apples"]);
