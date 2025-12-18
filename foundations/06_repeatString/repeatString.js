const repeatString = function(string,num) {
    word = "";
    if(num < 0){
        return "ERROR";
    }
    for(i=0;i<num;i++){
        word += string;
    }
    return word;
};

// Do not edit below this line
module.exports = repeatString;
