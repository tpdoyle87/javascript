let num = 3.14595847

console.log(num.toFixed(5))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))



let makeGuess = function (guess) {
  let min = 1
  let max = 6
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
  if (guess === randomNum){
    return `Nice! you guessed ${guess} and that was correct!`
  } else {
    return `Sorry ${guess} was not correct`
  }
}



console.log(makeGuess(3))
