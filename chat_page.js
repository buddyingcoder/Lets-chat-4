//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyCTd62H_aiVs9NyRJSJI3ESAQtVfkO0UG4",
    authDomain: "lets-talk-5fac8.firebaseapp.com",
    databaseURL: "https://lets-talk-5fac8-default-rtdb.firebaseio.com",
    projectId: "lets-talk-5fac8",
    storageBucket: "lets-talk-5fac8.appspot.com",
    messagingSenderId: "582742026154",
    appId: "1:582742026154:web:b71e9d7ad873fd1da7edd3",
    measurementId: "G-FFFEBZYJKE"
  };
    firebase.initializeApp(firebaseConfig)
    room_name = localStorage.getItem("room_name")
    user_name = localStorage.getItem("user_name")
    function send()
    {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0  
      });
      
      document.getElementById("msg").value = "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
