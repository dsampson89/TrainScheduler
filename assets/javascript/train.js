// Initialize Firebase
var config = {
    apiKey: "AIzaSyAYSY8Yufzd3WvCiQlwb5bgqZ3EmX-QodM",
    authDomain: "train-schedule-219e2.firebaseapp.com",
    databaseURL: "https://train-schedule-219e2.firebaseio.com",
    projectId: "train-schedule-219e2",
    storageBucket: "train-schedule-219e2.appspot.com",
};

firebase.initializeApp(config);

var database = firebase.database();

//Adding Train
$("#add-train-btn").on("click", function(event){
    //Prevent Clearing Data
    event.preventDefault();

    //Input data
    txName = $("#train-name-input").val().trim();
    txDestination = $("#destination-input").val().trim();
    txTime = $("#train-time-input").val().trim();
    txFrequency = $("#frequency-input").val().trim();

    // Local variable
    var newTx = {
        name: txName,
        destination: txDestination,
        time: txTime,
        frequency: txFrequency,
    };

    //Push new data
    database.ref().push(newTx);

    //Log new data
    console.log(newTx.name);
    console.log(newTx.destination);
    console.log(newTx.time);
    console.log(newTx.frequency);

    //clear boxes
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#train-time-input").val("");
    $("#frequency-input").val("");
});

database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());

    var txName = childSnapshot.val().name;
    var txDestination = childSnapshot.val().destination;
    var txTime = childSnapshot.val().time;
    var txFrequency = childSnapshot.val().frequency;
});    
