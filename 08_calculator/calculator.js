const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	if (array.length == 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
};

const multiply = function(array) {
  if (array.length < 2) {
    return 0;
  }

  let product = 1;
  for (let i = 0; i < array.length; i++) {
    product *= array[i];
  }

  return product;
};

const power = function(num, exp) {
  let power = num;
	for (let i = 1; i < exp; i++) {
    power = power * num;
  }

  return power;
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  }

  return num * factorial(num - 1);  
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
