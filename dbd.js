const express = require("express");
const bodyParser = require("body-parser");

const app = express();


//app.use.bodyParser.urlencoded(url, extended: {true});

app.get("/", function(req, res) {
    res.send("Hello");
});

app.listen(3000, function() {
    console.log("Server started on port 3000.");
});


window.onload.alert("test!");


/*document.addEventListener("load", function () {
    var cyberPunk = new Audio("audios/")
    cyberPunk.play();
}*/