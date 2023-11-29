const firebaseConfig = {
  apiKey: "AIzaSyABi9E0HRnJ94CBuBYyPz-SHlWIN7TC68o",
  authDomain: "bmerilldatabase2023.firebaseapp.com",
  projectId: "bmerilldatabase2023",
  storageBucket: "bmerilldatabase2023.appspot.com",
  messagingSenderId: "700492951981",
  appId: "1:700492951981:web:f520a3b43ae781f3d27124",
  measurementId: "G-WLDY7W6T7Y"
};
// Initialize Firebase
console.log(firebaseConfig);
firebase.initializeApp(firebaseConfig);


// save the data
$("#signup-form").submit(function(e) {
  e.preventDefault();
  // get the username(email) and password from the form
  // change the following code
  var username = $('input[name="fullname"]').val();
  var emailaddress = $('input[name="username"]').val();
  var password = $('input[name="password"]').val();
  var confirmedpassword = $('input[name="cpassword"]').val();

  console.log(username, emailaddress, password, confirmedpassword);

  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(emailaddress, password)
    .then((result) => {
      // Signed in
      let user = result.user;
      user.updateProfile({
        displayName: username
      }).then(() => {
        console.log("update profile successfully!");
        console.log(user.displayName, "are signed up"); 

        var date = "Wed, 29 NOV 2023 07:28:00 GMT";
        var userinformation = {
          "username": user.displayName,
          "email": emailaddress,
          "signupDate": date
        };
      });
  
      
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });
});
