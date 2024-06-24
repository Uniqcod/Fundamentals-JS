function dayOfWeek(dayNumber) {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    let result = days[dayNumber -1];
    // console.log(result);
   
    if (result !== undefined){
        console.log(result);
    } else {
        console.log(`Invalid day!`);
    }
}
dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);