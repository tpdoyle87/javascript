// function - input (argument), code, output

let greetUser = function () {
  console.log('Welcome user!');
}

greetUser();

let square = function (num) {
  let result = num * num;
  return result;
}

let value = square(3);
let otherValue = square(10);

console.log(value);
console.log(otherValue);

let convertFahrenheitToCelsius = function (temp) {
  return (temp - 32) * (5/9);
}

let temperature = convertFahrenheitToCelsius(32);
let otherTemperature = convertFahrenheitToCelsius(68);

console.log(temperature);
console.log(otherTemperature);
