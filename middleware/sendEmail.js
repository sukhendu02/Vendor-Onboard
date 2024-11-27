const formData = require('form-data');
  const Mailgun = require('mailgun.js');
  const mailgun = new Mailgun(formData);
  const dotenv = require("dotenv");
  dotenv.config({ path: "./config.env" });

  const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || 'key-yourkeyhere'});
  
//   mg.messages.create('sandbox-123.mailgun.org', {
//   	from: "Excited User <mailgun@sandbox79371b016e5c4c708e06aa11de83017c.mailgun.org>",
//   	to: ["test@example.com"],
//   	subject: "Hello",
//   	text: "Testing some Mailgun awesomeness!",
//   	html: "<h1>Testing some Mailgun awesomeness!</h1>"
//   })
//   .then(msg => console.log(msg)) // logs response data
//   .catch(err => console.log(err)); // logs any error


const sendEmail = async (to, subject, text) => {
  mg.messages.create('sandbox-123.mailgun.org', {
  	from: "Excited User <mailgun@sandbox79371b016e5c4c708e06aa11de83017c.mailgun.org>",
  	to:"sukhendumandal0210@gmail.com",
  	subject: "Hello",
  	text: "Testing some Mailgun awesomeness!",
  	html: "<h1>Testing some Mailgun awesomeness!</h1>"
  })
  .then(msg => console.log(msg)) // logs response data
  .catch(err => console.log(err)); // logs any error

    
}


  module.exports =  sendEmail ;