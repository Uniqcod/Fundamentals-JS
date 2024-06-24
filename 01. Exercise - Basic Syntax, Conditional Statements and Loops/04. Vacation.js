function vacation(groupOfThePeople, typeOfTheGroup, dayOfTheWeek) {

    let pricePerPerson = 0;

    if (dayOfTheWeek === `Friday`) {
        switch (typeOfTheGroup) {
            case `Students`:
                pricePerPerson = 8.45;
                break;
            case `Business`:
                pricePerPerson = 10.90;
                break;
            case `Regular`:
                pricePerPerson = 15;
                break;
        }
    } else if (dayOfTheWeek === `Saturday`) {
        switch (typeOfTheGroup) {
            case `Students`:
                pricePerPerson = 9.80;
                break;
            case `Business`:
                pricePerPerson = 15.60;
                break;
            case `Regular`:
                pricePerPerson = 20;
                break;
        }
    } else if (dayOfTheWeek === `Sunday`) {
        switch (typeOfTheGroup) {
            case `Students`:
                pricePerPerson = 10.46;
                break;
            case `Business`:
                pricePerPerson = 16;
                break;
            case `Regular`:
                pricePerPerson = 22.50;
                break;
        }
    }
    let pricePerGrop = pricePerPerson * groupOfThePeople;

    if (typeOfTheGroup === `Students` && groupOfThePeople >= 30){
        pricePerGrop *= 0.85;
    } else if (typeOfTheGroup === `Business` && groupOfThePeople >= 100){
        pricePerGrop -= pricePerPerson * 10;
    } else if (typeOfTheGroup === `Regular` && groupOfThePeople >= 10 && groupOfThePeople <= 20){
        pricePerGrop *= 0.95;
    }
    console.log(`Total price: ${pricePerGrop.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
