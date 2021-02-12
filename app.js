//Set Variables
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var tasks = ["Meditate", "Read", "Stretch"];


//Set Views
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

// Static Files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "/css"));
app.use("/js", express.static(__dirname + "/js"));
app.use("/img", express.static(__dirname + "/img"));



// Root Route Thread 
app.get("/", function(req, res) {
   // res.sendFile(__dirname + "/views/dobedo.html");

    let today = new Date();
    
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    let fullDay = today.toLocaleDateString("en-US", options);
    res.render("dobedo", {fullDate: fullDay, newTasks: tasks});
});

app.post("/", function(req, res) {
    var newItem = req.body.newTask;
    tasks.push(newItem);
    res.redirect("/");
});

//send to-do list array and input field to dobedo.html
//attach separate to-do list to each visible object (body parts, household, etc)
//make it hidden by default but with css toggle visibility on click 


//add three view modes which the user can toggle through (habits, to-dos, progress)
//every day, the habits can be logged like recurring to-dos
//and to-dos can be added on the fly 
//and progress tracks the to-dos done every day/week/month, as well as the win/loss status of the habits
//the main screen will change display based on whether the good or bad habits have been winning in balance
// and it will have optional "more details" to display per user request

// note: add the same functionality for the other areas of life besides the corporal 


//general tip: to become amazing at JS, use JS to build elements, add/remove attributes
// and script and add/subtract events

// document.addEventListener("load", function () {
//     var cyberPunk = new Audio("audios/")
//     cyberPunk.play();
// });

app.listen(3000, function() {
    console.log("Server started on port 3000.");
});

