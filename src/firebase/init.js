 import firebase from 'firebase';


 // Initialize Firebase
 var config = {
   apiKey: "AIzaSyDacyu1qkAoFwAfuWRtyJxVZb_gPDJU-WI",
   authDomain: "user-authentication-b7bec.firebaseapp.com",
   databaseURL: "https://user-authentication-b7bec.firebaseio.com",
   projectId: "user-authentication-b7bec",
   storageBucket: "",
   messagingSenderId: "928593042180"
 };
 const firebaseApp = firebase.initializeApp(config);
 export default firebaseApp;
