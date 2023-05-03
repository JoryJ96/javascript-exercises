const convertToCelsius = function(fahr) {
    let cels = Math.round((fahr - 32) * (5/9) * 10) / 10;
    return cels;
};

const convertToFahrenheit = function(cels) {
    let fahr = Math.round((cels * (9/5) + 32) * 10) / 10;
    return fahr;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
