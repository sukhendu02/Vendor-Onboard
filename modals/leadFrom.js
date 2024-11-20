const mongoose = require("mongoose");
const express = require("express");
const app = express();
const leadForm = new mongoose.Schema({
  Name: String,
  B_email: String,
  Phone: String,
  ProducBS: String,
  B_type: String,
  info: String,

  date: { type: Date, default: Date.now },
});
const leadForms = mongoose.model("leadForms", leadForm);
module.exports = leadForms;
