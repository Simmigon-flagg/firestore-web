const signin = document.querySelector("#signin");
const register = document.querySelector("#register");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const matchPassword = document.querySelector("#matchpassword");
const signup = document.querySelector("#signup");
const register = document.querySelector("#register");

signin.addEventListener("click", function () { 
    window.location.pathname = '/app.html'
});

register.addEventListener("click", function () { 
    window.location.pathname = '/register.html'
});

signup.addEventListener("click", function () { 
   console.log(email);
   console.log(password);
   console.log(ma);
});
