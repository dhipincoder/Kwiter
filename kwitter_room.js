
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyAzzI6RCrUaKD2MEOq0YE0RSDCgpJAiwKk",
      authDomain: "kwtter-a08ae.firebaseapp.com",
      projectId: "kwtter-a08ae",
      storageBucket: "kwtter-a08ae.appspot.com",
      messagingSenderId: "100011342713",
      appId: "1:100011342713:web:d71bd9e5aebcd91bf6cda8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
