const hbs = require("hbs");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})

const leadForms = require("../modals/leadFrom");

//  BODY PARSER
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());


module.exports = function (app) {


  // Submit form Route
  app.post("/leadform", async (req, res) => {
    const { bname, b_email, b_type, phone, productBS, info } = req.body;

    if (bname == "" || b_email == "" || phone == "" || b_type == "") {
      res.redirect("/#form");
    }
    const lead = new leadForms({
      bname,
      b_email,
      phone,
      productBS,
      b_type,
      info,
    });
   

    try {
     
      const leadformsave = await lead.save();
      req.flash('success','something')
      console.log('Flash message set:', req.flash('success')); // Should l
      res.redirect('/#form')

    } catch (error) {
      req.flash('failed','Failed to submit form')
      res.status(500).redirect('/#form');
      
     
    }



      
    
  });
};
