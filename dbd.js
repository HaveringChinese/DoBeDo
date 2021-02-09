const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use("view engine", "ejs");


//app.use.bodyParser.urlencoded(url, extended: {true});


app.get("/", function(req, res) {
    var today = new Date();
    var currentDay = today.getDay();

    if (currentDay === 6 || currentDay === 0) {
        res.write("<h1>Yay it's the weekend!</h1>");
        res.write(currentDay);

    }   else {
        res.write(currentDay);
        res.send("<h1>Boo! I have to work!</h1>");
    }   
});

app.listen(3000, function() {
    console.log("Server started on port 3000.");
});


/*document.addEventListener("load", function () {
    var cyberPunk = new Audio("audios/")
    cyberPunk.play();
}*/