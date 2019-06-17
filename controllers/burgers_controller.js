var express = require("express");

var router = express.Router();

//need data for DB functions. 
var burger = require("../models/burger.js")

router.get("/", function(req, res){
    burger.all(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

