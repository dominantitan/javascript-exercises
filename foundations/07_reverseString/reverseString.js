const reverseString = function(string) {
    const stringSize = string.length;
    let reversedWord = "";
    for ( let i = stringSize-1; i >= 0; i--){
        reversedWord += string[i];
    }
    return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
