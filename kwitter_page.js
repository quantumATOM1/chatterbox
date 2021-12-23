//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBjoGlBnh1aNpv_zrSmjNheBFB1JynoDXI",
      authDomain: "kwitter-48ca2.firebaseapp.com",
      databaseURL: "https://kwitter-48ca2-default-rtdb.firebaseio.com",
      projectId: "kwitter-48ca2",
      storageBucket: "kwitter-48ca2.appspot.com",
      messagingSenderId: "920707602248",
      appId: "1:920707602248:web:95e199da234057a8d6c57d",
      measurementId: "G-CKW80LRKHD"
    };
  
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name=message_data['name']
message=message_data['message']
like=message_data['like']
name_with_tag="<h4>"+ name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+message+"firebase_message_id+"value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'"


//End code
      } });  }); }
getData();
function send(){
      msg=document.getElementById("msg").Value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value=""

}