// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//variables for reservations made
var reservations = [{
        routeName: "Donald",
        name: "Donald duck",
        phoneNumber: 7777777777,
        email: "duck@me.com",
        uniqueId: 7000
    },
    {
        routeName: "Mickey",
        name: "Mickey Mouse",
        phoneNumber: 5555555555,
        email: "mickey@me.com",
        uniqueId: 5000
    },
    {
        routeName: "Winnie",
        name: "Winnie Poo",
        phoneNumber: 3333333333,
        email: "winnie@me.com",
        uniqueId: 3000
    },
];

//Variables for waiting list
var waitingList = [{
    routeName: "Curious",
    name: "Curious George",
    phoneNumber: 4444444444,
    email: "george@me.com",
    uniqueId: 4000
}]

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/make", function (req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
});

app.get("/view", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

//basic route
app.get("/", function (req, res) {
    res.send("restaurant page");
});

// Displays all reservations
app.get("/api/reservations", function (req, res) {
    return res.json(reservations);
});

// Displays waiting list
app.get("/api/waitingList", function (req, res) {
    return res.json(waitingList);
});

// // Displays a single reservation, or returns false
// app.get("/api/reservations/:reservation", function (req, res) {
//     var newReservation = req.params.reservation;

//     console.log(newReservation);

//     for (var i = 0; i < reservations.length; i++) {
//         if (newReservation === reservations[i].routeName) {
//             return res.json(reservations[i]);
//         }
//     }
//     return res.json(false);
// });

// Create New reservations - takes in JSON input
app.post("/api/reservations", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newreservation = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newreservation.routeName = newreservation.name.replace(/\s+/g, "").toLowerCase();

    console.log(newreservation);

    characters.push(newreservation);

    res.json(newreservation);
});





// Starts the server to begin listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});