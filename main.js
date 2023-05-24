function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("AIzaSyDeWKCfdNql_xJseO6XOtr0d_C9N9iGBFg").child("user_name").update({
    purpose : "adding user"    
    });
}

function addRoom()
{
    romm_name = document.getElementById("room_name").value;

    firebase.database().ref("AIzaSyDeWKCfdNql_xJseO6XOtr0d_C9N9iGBFg").child(room_name).udate({
        purpose : "adding room name"
    });

    localStorage.setItem("room_name" , room_name);

window.location = "kwitter_page.html";
}

function getData(){firebase.database().ref("AIzaSyDeWKCfdNql_xJseO6XOtr0d_C9N9iGBFg").on('value' , function(snapshot) {document.getElementById("output").innerHTML
Room_names = childKey;

console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.ad)' >#"+Room_names +"</div><hr>";
document.getElementById("output").innerHTML +=row;
});};

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location = "kwitter_page.HTML";
}

var   firebaseConfig = {
    apiKey: "AIzaSyBQyjrjTsIQsGMGcgu-cr1HjszcHi5ZWMk",
    authDomain: "testkwitter.firebaseapp.com",
    databaseURL: "https://testkwitter.firebaseio.com",
    projectId: "testkwitter",
    storageBucket: "testkwitter.appspot.com",
    messagingSenderId: "624653701634",
    appId: "1:624653701634:web:2cb9a8bd873f17d92d8d1b"
};

firebase.intializeApp(firebaseConfig);
 user_name = localStorage.getItem("user_name");
 room_name = loalStorage.getItem("room_name");

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
 function getData(){firebbase.database().ref("/"+room_name).on('value' , function(snapshot) {document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapShot) {
childKey = childSnapShot.key; childData = childSnapShot.val(); if(childKey !="purpose") {}
    firebase_message_id = childKey;
    message_data = childData;

    console.log(firebase_message_id);
    console.log(message_data);
    name = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4> " + name +"img class='user_tick' src='tick.png'></h4>";
    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
    like_button = "<button class='btn btn-warning' id="+"

function updateLike
{
    console.log("clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    update_likes = Number(likes) + 1;
    console.log (updated.likes);
    
    firebase.database().ref(room_name).child(memssage_id).update({
        like : updated_likes
    });
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
     window.location.replace("kwitter.html");
}