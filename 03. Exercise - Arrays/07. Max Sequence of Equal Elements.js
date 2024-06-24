function maxSequenceEqualEl(arr) {
    let longestSequence = [];
    let currSequence = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        let currEl = arr[i];

        if (currEl === currSequence[0]) {
            currSequence.push(currEl)

            if (currSequence.length > longestSequence.length) {
                longestSequence = currSequence;
            }
        } else {
            currSequence = [currEl];
        }

    }
    console.log(longestSequence.join(' '));
}
maxSequenceEqualEl([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceEqualEl([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceEqualEl([4, 4, 4, 4]);
maxSequenceEqualEl([0, 1, 1, 5, 2, 2, 6, 3, 3]);
