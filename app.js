var express=require('express');
var nodemailer = require("nodemailer");
var bodyParser = require('body-parser');
var app=express();
const path = require('path');
const dotenv = require('dotenv').config({ path: path.join(__dirname, '../.env') });
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

var smtpTransport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  secure: false,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.PASS_EMAIL,
  }
});

app.post('/send',function(req,res){
  var mailOptions={
    from: req.body.email,
    to : "hello@prataphealthfoods.com",
    subject : "Enquiry",
    html : "<div><p>Hello,<p>Name: " +req.body.name+"</p><p>Email: "+req.body.email+"</p><p>Subject: "+req.body.subject+"</p><p>Message: "+req.body.message+"</p><p>Thanks,</p><p>Pratap Health & Foods (India) Private Limited</p></div>"
  }
  smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
      console.log(error);
      res.end("error");
    }else{
      console.log("Message sent: " + response.message);
      res.end("sent");
    }
  });
});

app.listen(port,function(){
  console.log("Express Started on Port 3000");
});
