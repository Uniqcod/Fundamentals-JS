function division(num) {

    let divisions = [10, 7, 6, 3, 2];

    for (let i = 0; i < divisions.length; i++) {
        let devisor = divisions[i];

        if (num % devisor === 0) {
            console.log(`The number is divisible by ${devisor}`);
            return;
        }
    }
    console.log(`Not divisible`);
}
division(30);
division(15);
division(12);
division(1643);