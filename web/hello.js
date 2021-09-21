var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send("Hello graphql----");
  });

app.listen(3000, function () {
    console.log("App started");
});
  
