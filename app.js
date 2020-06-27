var express=require('express');
var nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
var app=express();

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

var smtpTransport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  secure: false,
  auth: {
    user: "soujanya.venkatesh@gmail.com",
    pass: "yedhqynoligpywhl"
  }
});

app.get('/send',function(req,res){
  console.log("tryin to send email");
  var mailOptions={
    from: req.body.email,
    to : "soujanya.venkatesh@gmail.com",
    subject : req.body.subject,
    html : "<div><p>Hello,<p>Name: " +req.body.name+"</p><p>Email: "+req.body.email+"</p><p>Message: "+req.body.message+"</p><p>Thanks,</p><p>Pratap Health & Foods (India) Private Limited</p></div>"
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
