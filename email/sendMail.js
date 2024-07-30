const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SENDER_EMAIL  ,
    pass: process.env.SENDER_PASSWORD,
  },
});

const sendEmail = (recipient, subject, htmlContent) => {
    console.log(recipient,"<<<<<>>>>>" )
  const mailOptions = {
    from: process.env.SENDER_EMAIL, 
    to: recipient, 
    subject: subject, 
    html: htmlContent 
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Email sent: %s', info.messageId);
  });
};

module.exports = { sendEmail };
