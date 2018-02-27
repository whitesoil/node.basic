var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service : 'Gmail',
  auth: {
    user: 'My account ID',
    pass:'My account PW'
  }
});

var mailOptions={
  from:'my account ID',
  to:'target email',
  subject:'Sending text from Node.js',
  text:'That was easy!'
};

transporter.sendMail(mailOptions,function(err,info){
  if(err){
    console.log(err);
  } else{
    console.log('Email sent: ' + info.response);
  }
  transporter.close();
});
