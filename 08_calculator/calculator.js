const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return (a > b) ? (a - b) : (b - a);
};

const sum = function(arr) {
  return arr.reduce((total, item) => {
    return total + item;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, item) => {
    return product *= item;
  }, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
  let output = 1;
	for (i = a; i > 0; i--) {
    output *= i;
  }
  return output;
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
