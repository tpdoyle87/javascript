let temp = 92;
let isFreezing = temp <= 32;

if (isFreezing){
  console.log("It is freezing outside today");
  console.log("The current temperature is " + temp +'.');
} else if (temp >= 90) {
  console.log("It is so hot out today");
  console.log("The temperature is " + temp + '.');
} else {
  console.log("It is a nice day");
}




let age = 17;

if (age <= 7){
  console.log("There is a child discount available");
} else if (age >= 65) {
  console.log("We have a senior citizen discount");
} else {
  console.log("You must pay the full price");
}
