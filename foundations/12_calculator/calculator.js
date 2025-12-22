const add = function(num1,num2) {
  return (num1+num2);
};

const subtract = function(num1,num2) {
	return (num1-num2);
};

const sum = function(array) {
	let s = 0;
  for(let i = 0;i < array.length;i++){
    s += array[i];
  }
  return s;
};

const multiply = function(array) {
  let product = 1;
  for(let i = 0;i<array.length;i++){
    product *= array[i];
  }

  return product;
};

const power = function(num1,num2) {
	return (Math.pow(num1,num2));
};

const factorial = function(num1) {
  let fact = 1;
	for(let i = 0;i<num1;i++){
    fact *= (num1-i);
  }

  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
