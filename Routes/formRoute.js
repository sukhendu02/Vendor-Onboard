const hbs = require("hbs");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//  BODY PARSER
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())


// const leadForm = require("./modals/leadForm");

module.exports = function (app) {
    app.get('/abc',(req,res)=>{
        res.send("Working fine")
    })
};
