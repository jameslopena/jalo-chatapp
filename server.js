var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.end("test");
}).listen(process.env.PORT || 8080, function(){
    console.log("listening..");
});