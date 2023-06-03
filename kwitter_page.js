//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCF_evoHlC6gjULBG-Hx-uiDu9AP1ziPVg",
      authDomain: "kwitter-8644f.firebaseapp.com",
      databaseURL: "https://kwitter-8644f-default-rtdb.firebaseio.com",
      projectId: "kwitter-8644f",
      storageBucket: "kwitter-8644f.appspot.com",
      messagingSenderId: "846998055987",
      appId: "1:846998055987:web:4f4a5617e56cfd9fcac746"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name")

room_name =localStorage.getItem("room_name")

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
