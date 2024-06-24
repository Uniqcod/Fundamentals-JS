function rightPlace (word, symbol, match){
let result = word.replace(`_`, symbol);
let output = result === match ? "Matched" : "Not Matched";
console.log(output);
}
rightPlace ('Str_ng', 'I', 'Strong');
rightPlace ('Str_ng', 'i', 'String');