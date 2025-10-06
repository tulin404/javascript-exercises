const convertToCelsius = function(temp) {
  const roundedConverted = ((temp - 32) / 1.8).toFixed(1);
  const convertedNum = parseFloat(roundedConverted);
  return convertedNum;
};

const convertToFahrenheit = function(temp) {
  const roundedConverted = (temp * 1.8 + 32).toFixed(1);
  const convertedNum = parseFloat(roundedConverted);
  return convertedNum;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
