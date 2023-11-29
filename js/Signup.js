var firebaseConfig = {
  apiKey: "AIzaSyABi9E0HRnJ94CBuBYyPz-SHlWIN7TC68o",
  authDomain: "bmerilldatabase2023.firebaseapp.com",
  projectId: "bmerilldatabase2023",
  storageBucket: "bmerilldatabase2023.appspot.com",
  messagingSenderId: "700492951981",
  appId: "1:700492951981:web:f520a3b43ae781f3d27124",
  measurementId: "G-WLDY7W6T7Y"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// save the data
$("#signup-form").submit(function(e) {
  e.preventDefault();
  // get the username(email) and password from the form
  // change the following code
  //var email = ;
  //var password = ;

  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      // Signed in
      // ...
      console.log("You are signed up");
      window.location.href = "Login.html";
      
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });
});
