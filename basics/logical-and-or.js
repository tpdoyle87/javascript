let temp = 55;

// logical and operator - True if both sides are true, false otherwise

if(temp >= 60 && temp <= 90){
  console.log("it is really nice out")
}else if(temp <= 0 || temp >= 120){
  // logical or operator - True if atleast one side is true, false otherwise
  console.log("Do not go outside!")
} else {
  console.log("meh, do what you want")
}

//challenge area

let isGuestOneVegan = false;
let isGuesttwoVegan = false;

// are both vegan? only offer vegan dishes.
// atleast one vegan - Make sure to offer some vegan options
// else - Offer everything on the menu
if(isGuestOneVegan && isGuesttwoVegan) {
  console.log("Offer only vegan dishes");
} else if (isGuestOneVegan || isGuesttwoVegan) {
  console.log("Make sure to offer some vegan dishes");
} else {
  console.log("Offer anything on the menu");
}
