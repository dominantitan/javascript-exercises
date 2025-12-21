const sumAll = function(num1,num2) {
    if(Number.isInteger(num1) && Number.isInteger(num2) && num1 > 0 && num2 > 0){

    let greaterInteger = (num1 > num2)?num1:num2;
    let smallerInteger = (num1 == greaterInteger)?num2:num1
    let sum = 0;
    let temp;

    for(let i = 0;temp != greaterInteger;i++){
        temp = smallerInteger + i;
        sum += temp;
    }

    return sum;

    }else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
