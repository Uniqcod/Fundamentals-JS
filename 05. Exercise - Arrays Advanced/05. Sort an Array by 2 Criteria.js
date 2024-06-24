function sortAnArray(arr) {

    let sortedArr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(sortedArr.join(`\n`));
}
sortAnArray(["alpha", "beta", "gamma"]);
sortAnArray(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
