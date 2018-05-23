var config = {
    apiKey: "AIzaSyBaOFmbpdvJlNY-4owOugDGZpGpOW9Zf-0",
    authDomain: "countdown-project-fedfe.firebaseapp.com",
    databaseURL: "https://countdown-project-fedfe.firebaseio.com",
    projectId: "countdown-project-fedfe",
    storageBucket: "countdown-project-fedfe.appspot.com",
    messagingSenderId: "938284046863"
  };
firebase.initializeApp(config);
var database = firebase.database();

var name = [];
var role = [];
var startDate = [];
var monthlyRate = [];
var firebasekey = [];


$(".btn").on("click",function(event){
    event.preventDefault();

    name = $("#name-input").val().trim();
    role = $("#role-input").val().trim();
    startDate = $("#startDate-input").val().trim();
    monthlyRate = $("#monthlyRate-input").val().trim();
    
    $("#name-display").text(name);
    $("#role-display").text(role);
    $("#startDate-display").text(startDate);
    $("#monthlyRate-display").text(monthlyRate);
    
    var key = database.ref().push({
        name: name,
        role: role,
        startDate: startDate,
        monthlyRate: monthlyRate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
    firebasekey.push(key);

    localStorage.clear();

    localStorage.setItem(name, key)

})

database.ref().on("child_added", function(snapshot) {
    console.log(snapshot.val());
    console.log(snapshot.val().name);
    console.log(snapshot.val().role);
    console.log(snapshot.val().startDate);
    console.log(snapshot.val().monthlyRate);

    
   
});






