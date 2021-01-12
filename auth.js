const anonymousBtnLogin = document.getElementById("anonymousBtnLogin");
const googleBtnLogin = document.getElementById("googleBtnLogin");
const signIneandp = document.getElementById("signIneandpBtn");
const signUpeandp = document.getElementById("signUpeandpBtn");
const loginform = document.getElementById("loginform");
const email = document.getElementById("email");
const password = document.getElementById("password");

signIneandp.addEventListener("click", function (e) {
  e.preventDefault();
  const emailvalue = email.value;
  const passwordvalue = password.value;
  firebase
    .auth()
    .signInWithEmailAndPassword(emailvalue, passwordvalue)
    .then((value) => {
      console.log("Here: " + value);
    })
    .catch((error) => {
      console.log("Error: " + error);
    });
});

signUpeandp.addEventListener("click", function (e) {
  e.preventDefault();
  const emailvalue = email.value;
  const passwordvalue = password.value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(emailvalue, passwordvalue)
    .then((value) => {
      console.log("Here: " + value);
    })
    .catch((error) => {
      console.log("Error: " + error);
    });
});

anonymousBtnLogin.addEventListener("click", function () {
  firebase.auth().signInAnonymously();
});

googleBtnLogin.addEventListener("click", function () {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      const credential = result.credential;
      console.log(credential);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = credential.accessToken;
      console.log(token);
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      window.location.assign("./app.html");
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      console.log(errorCode);
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
});

firebase.auth().onAuthStateChanged((userfromfirebase) => {
  if (userfromfirebase) {
    anonymousBtnLogin.style.display = "none";
    loginform.style.display = "none";
    window.location.href = "./app.html";
  } else {
    anonymousBtnLogin.style.display = "block";
    loginform.style.display = "block";
  }
});
