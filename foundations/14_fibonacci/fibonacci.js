const fibonacci = function(num) {
    let a = 1;
    let b = 1;
    let number = Number(num);
    let temp;
    let arr = [a,b];

    if (number < 0){
        return "OOPS";
    }if (number == 0){
        return 0;
    }else{

    for(let i = 3;i <= number;i++){
        temp = a + b;
        a = b;
        b = temp;
        arr.push(temp);
    }

    return arr[number-1];
    }

};

// Do not edit below this line
module.exports = fibonacci;
