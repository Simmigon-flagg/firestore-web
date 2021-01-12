const logout = document.getElementById("logout");
logout.addEventListener("click", function () {
    firebase.auth().signOut();
  });
firebase.auth().onAuthStateChanged((userfromfirebase) => {
  if (userfromfirebase) {
    console.log(userfromfirebase);
  } else {
    console.log("Signed Out");
    window.location.href ="./index.html";
  }
});
