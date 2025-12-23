const palindromes = function (string) {
    let backwardString = "";
    let noSpaceString = omitSpacesNshit(string);

    for(let i = noSpaceString.length - 1;i >= 0;i--){
        backwardString += noSpaceString.at(i);
    }
    
    let frontString = noSpaceString.toLowerCase();
    let backString = backwardString.toLowerCase();

    if(frontString == backString){
        return true;
    }else{
        return false;
    }
};

function omitSpacesNshit(string){
    let s = string.replace(/[ ,!.']/g,"");
    return s;
}

// Do not edit below this line
module.exports = palindromes;
