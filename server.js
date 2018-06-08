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

var reservations = [{
        routeName: "Donald",
        name: "Donald duck",
        phoneNumber: 777 - 777 - 7777,
        email: "duck@me.com",
        uniqueId: 7000
    },
    {
        routeName: "Mickey",
        name: "Mickey Mouse",
        phoneNumber: 555 - 555 - 5555,
        email: "mickey@me.com",
        uniqueId: 5000
    },
    {
        routeName: "Winnie",
        name: "Winnie Poo",
        phoneNumber: 333 - 333 - 3333,
        email: "winnie@me.com",
        uniqueId: 3000
    },
];

var waitingList = [{
    routeName: "Curious",
    name: "Curious George",
    phoneNumber: 444 - 444 - 4444,
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

// Displays a single reservation, or returns false
app.get("/api/reservations/:character", function (req, res) {
    var newReservation = req.params.reservation;

    console.log(newReservation);

    for (var i = 0; i < reservations.length; i++) {
        if (newReservation === reservations[i].routeName) {
            return res.json(reservations[i]);
        }
    }
    return res.json(false);
});





// Starts the server to begin listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});