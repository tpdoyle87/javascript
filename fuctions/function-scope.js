//Global scope (convertFahrenheitToCelsius, tempOne, tempTwo)
  //local scope (fahrenheit, celsius)
    //Local scope (isFreezing)
let convertFahrenheitToCelsius = function (temp) {
    let celsius = (temp - 32) * (5/9);
    if (celsius <= 0){
      let isFreezing = true;
      //deepest scope not available outside the if statment
    }
    return celsius;
}

let temperature = convertFahrenheitToCelsius(-5);
let otherTemperature = convertFahrenheitToCelsius(68);



console.log(temperature);
console.log(otherTemperature);
