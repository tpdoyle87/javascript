let isAccountLocked = false;
let userRole = "user";

if (isAccountLocked) {
  console.log("Account locked");
} else if (userRole === 'admin'){
  console.log("Welcome, admin")
} else {
  console.log("Welcome!")
}
