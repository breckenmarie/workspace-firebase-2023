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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// save the data
$('#Login').submit(function (e) {
  e.preventDefault();
  // get the user name and password from form
  // You need to change this.
  var email = 'bmerrill@usca.edu';
  var password = 'p@ssword!';

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((success) => {
      // Signed in
      // ...
      console.log('login in');
      let user = firebase.auth().currentUser;

      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(name, email, emailVerified);
      }
    })
    .catch((error) => {

      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});

// add  a google login choice here 
