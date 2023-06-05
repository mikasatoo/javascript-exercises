const convertToCelsius = function(temp) {
  let celsiusTemp = (temp - 32)*(5/9);  // convert fahrenheit to celsius
  if (celsiusTemp === 0) {
    return celsiusTemp;   // return 0
  } else {
    return Number(celsiusTemp.toFixed(1));  // round to one decimal place and convert back to number (since toFixed() returns a string)
  }
};

const convertToFahrenheit = function(temp) {
  let fahrenheitTemp = (temp*(9/5)) + 32;  // convert celsius to fahrenheit
  if (fahrenheitTemp === 0) {
    return fahrenheitTemp;
  } else {
    return Number(fahrenheitTemp.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
