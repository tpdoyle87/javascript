// multiple arguments seperated by ,
let add = function (value1, value2, value3) {
  return value1 + value2 + value3
}

let result = add(5, 6, 3);
console.log(result);

// default arguments

let getScoreText = function (name = 'Anonymous', score = 0) {
  return  `Name: ${name} | Score: ${score}`;
}

let scoreText = getScoreText(undefined, 99);
console.log(scoreText);

//challenge

let getTip = function (total, tipPercent = .2) {
    return `You should tip $${total * tipPercent}  for the great service!`;
}

let tipAmount = getTip(50);
let tipAmount2 = getTip(100, .3);
let tipAmount3 = getTip(72, .1);
console.log(tipAmount);
console.log(tipAmount2);
console.log(tipAmount3);
