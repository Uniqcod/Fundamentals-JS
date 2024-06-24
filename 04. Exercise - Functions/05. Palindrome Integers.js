function palindromeIntegers(arr){

    function checkIfPalindrome(num){
        let numToStr = num.toString();
        let numStrReversed = '';

        for(let i = numToStr.length - 1; i >= 0; i--){
            let curChar = numToStr[i];
            numStrReversed += curChar;
        }
        return  numStrReversed === numToStr;
    }

    for(const num of arr){
        const isPalindrome = checkIfPalindrome(num);
        console.log(isPalindrome);
    }
}
palindromeIntegers([123,323,421,121]);
palindromeIntegers([32,2,232,1010]);