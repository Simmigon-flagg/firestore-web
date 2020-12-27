const email = document.querySelector("#email");
const password = document.querySelector("#password");
const matchPassword = document.querySelector("#matchpassword");
const signup = document.querySelector("#signup");


signup.addEventListener("click", function () { 
   console.log(email.value);
   console.log(password.value);
   console.log(matchPassword.value);
});
