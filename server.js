/// <reference path="./typings/main.d.ts" />

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

app.get('/', function(req, res){
    res.sendFile(__dirname + "/server/views/index.html");
    //res.render("index")
})

var port = process.env.PORT || 8080
app.listen(port, function(){
    console.log("listening..");
});

