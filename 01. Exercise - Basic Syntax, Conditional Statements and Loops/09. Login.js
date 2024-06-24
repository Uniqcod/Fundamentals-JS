function login(input) {

    let userName = input[0];
    let splitString = userName.split('');
    let reverseArray = splitString.reverse();
    let rightPasswors = reverseArray.join('');

    let countTry = 0;

    let index = 1;
    let command = input[index];
    index++;

    while (command !== rightPasswors) {
        countTry++;
        if (countTry <= 3) {
            console.log(`Incorrect password. Try again.`);
        } else {
            console.log(`User ${userName} blocked!`);
            return;
        }

        command = input[index];
        index++;
    }
    console.log(`User ${userName} logged in.`);
}
// login(['Acer', 'login', 'go', 'let me in', 'recA']);
// login(['momo', 'omom']);
login(['sunny','rainy','cloudy','sunny','notsunny']);