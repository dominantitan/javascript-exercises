const sumAll = function(num1,num2) {
    if(!(Number.isInteger(num1) && Number.isInteger(num2) && num1 > 0 && num2 > 0)){
        return "ERROR"
    }

    let greaterInteger = (num1 > num2)?num1:num2;
    let smallerInteger = (num1 == greaterInteger)?num2:num1
    let array = [];

    for(let i = smallerInteger;i <= greaterInteger;i++){
        array.push(i);
    }

    let sum = array.reduce((sum,current) => sum + current,0);
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
