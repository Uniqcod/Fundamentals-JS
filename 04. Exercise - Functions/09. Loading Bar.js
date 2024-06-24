function loadingBar(progress) {

    let result = '';

    for (let percentage = 1; percentage <= progress; percentage += 10) {
        result += `%`;
    }

    for (let point = progress; point < 100; point += 10) {
        result += `.`;
    }
    if (progress < 100) {
        console.log(`${progress}% [${result}]`);
        console.log(`Still loading...`);
    } else {
        console.log(`${progress} Complete!`);
        console.log(`[${result}]`);
    }
}
// loadingBar(30);
// loadingBar(50);
loadingBar(100);