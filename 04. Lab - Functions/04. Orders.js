function orders(product, count) {
    let sum = 0;

    switch (product) {
        case `coffee`:
            sum = 1.50 * count
            break;
        case `water`:
            sum = 1.00 * count
            break;
        case `coke`:
            sum = 1.40 * count
            break;
        case `snacks`:
            sum = 2.00 * count
            break;
    }
    console.log(sum.toFixed(2));
}
orders("water", 5);
orders("coffee", 2);