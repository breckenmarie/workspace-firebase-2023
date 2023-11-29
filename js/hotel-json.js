/* Change the configuration */
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


// enter data in
$("input[type='button']").click(function (e) {
  //get the value of form

  /* save the data to database */

  /* clear the entry */
  $('form')[0].reset();
});




/* read the data from the database */

/*
firebase
  .firestore()
  .collection('hoteldata')
  .onSnapshot((querySnapshot) => {
    console.log(querySnapshot.size);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      console.log(doc.data().room);
      console.log(doc.data().checkout);
    });
  });
*/
