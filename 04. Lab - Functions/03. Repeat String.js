function reapeatString(str, repeatCount){
    let result = "";

    for(let i = 0; i < repeatCount; i++){
        result += str;
    }
    return result;
    // console.log(result);
}
reapeatString("abc", 3);
reapeatString("String", 2);