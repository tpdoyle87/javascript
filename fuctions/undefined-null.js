//undefined for variable

let name;
name = 'Jen';
if (name === undefined) {
  console.log("Please provide a name");
} else {
  console.log(name);
}

console.log(name);

// undefined for function arguments
let square = function (num) {
  console.log(num);
}

// undefined as the function return default value
let result = square();
console.log(result);

//null is meant to be assigned and undefined is a language default

//null as assigned value
let age = 30;

age = null;

console.log(age);
