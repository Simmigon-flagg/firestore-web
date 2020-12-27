// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var config = {
  apiKey: "AIzaSyDlmK4-vGPsEc3hQfn0r4q1S8Vhe-tP_YM",
  authDomain: "kaipherfirebaseapp.firebaseapp.com",
  databaseURL: "https://kaipherfirebaseapp.firebaseio.com",
  projectId: "kaipherfirebaseapp",
  storageBucket: "kaipherfirebaseapp.appspot.com",
  messagingSenderId: "1011528898696",
  appId: "1:1011528898696:web:1bcc360a091f89932ca73d",
  measurementId: "G-MHCXTSJ89E",
};
// Initialize Firebase
firebase.initializeApp(config);
const firestore = firebase.firestore();
const doc_users = firestore.doc("/users/name");
const message = document.querySelector("#messagefromfirestore");
const textBox = document.querySelector("#inputEmail");
const saveBtn = document.querySelector("#saveBtn");
const signout = document.querySelector("#signout");

saveBtn.addEventListener("click", function () {
  const name = textBox.value;
  alert(name);
  if (name !== null || name !== "undefined") {
    doc_users
      .set({
        name,
      })
      .then(function () {
        console.log("Saved and working");
      })
      .catch(function () {
        console.log("Not working");
      });
  }
});

doc_users.onSnapshot(function (doc) {
  if (doc && doc.exists) {
    const realTime = doc.data();
    message.innerHTML = `${realTime.name}`;
  }
});

signout.addEventListener("click", function () {
  window.location.pathname = "/index.html";
});
