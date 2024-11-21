const hbs = require("hbs");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// const leadForm = require("./modals/leadFroms");
const leadForms = require("../modals/leadFrom");
// const leadForms = require("../modals/leadFrom");
//  BODY PARSER
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// const leadForm = require("./modals/leadForm");

module.exports = function (app) {
  app.get("/abc", (req, res) => {
    res.send("Working fine");
  });

  // Submit form Route
  app.post("/leadform", async (req, res) => {
    const { bname, b_email, b_type, phone, productBS, info } = req.body;

    if (bname == "" || b_email == "" || phone == "" || b_type == "") {
      res.redirect("/#form");
    }
    const lead = new leadForms({
      bname,
      b_email,
      b_type,
      phone,
      productBS,
      info,
    });
    // console.log(lead);

    try {
      await lead.save();
      res.send(lead);
      console.log("Saved");
    } catch (error) {
      res.status(500).send(error);
      console.log("Not Saved");
    }
  });
};
