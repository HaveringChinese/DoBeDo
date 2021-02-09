const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set("view engine", "ejs");

//app.use.bodyParser.urlencoded(url, extended: {true});


app.get("/", function(req, res) {
    var today = new Date();
    var currentDay = today.getDay();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var whichDay = days[currentDay];
    console.log(whichDay, today, currentDay);

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    var day = today.toLocaleDateString("en-US", options);




    if (currentDay === 6 || currentDay === 0) {
        res.render("list", {day: whichDay});

    }   else {
    }  
    res.render("list", {day: whichDay});
    
});

app.listen(3000, function() {
    console.log("Server started on port 3000.");
});


/*document.addEventListener("load", function () {
    var cyberPunk = new Audio("audios/")
    cyberPunk.play();
}*/