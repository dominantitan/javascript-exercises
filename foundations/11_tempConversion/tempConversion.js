const convertToCelsius = function(TempInFahrenheit) {
    let TempInCelsius;

    TempInCelsius = (TempInFahrenheit - 32) * (5/9);
    let C = round(TempInCelsius,1);
    return C;
};

const convertToFahrenheit = function(TempInCelsius) {
    let TempInFahrenheit;

    TempInFahrenheit = (TempInCelsius*(9/5)+32);
    let F = round(TempInFahrenheit,1);
    return F;
};

function round(number,precision){
    multiplier = Math.pow(10,precision || 0);
    return Math.round(number * multiplier)/multiplier;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
