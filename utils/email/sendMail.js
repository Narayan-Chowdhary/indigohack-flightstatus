
const nodemailer = require('nodemailer');
const handlebars =  require('handlebars');
const fs = require('fs')
const path = require('path')

const cwd = path.join(__dirname, './email.html');

const emailTemplateSource = fs.readFileSync(cwd, 'utf8');
const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.SENDER_PASSWORD,
  },
});

const sendEmail = async (recipient, subject,filteredFlights ) => { 

  const emailTemplate = handlebars.compile(emailTemplateSource);

  dynamic_data={
    scheduled_arrival : filteredFlights[0].scheduled_arrival,
 
    flight_id:filteredFlights[0].flight_id, 
    airline:filteredFlights[0].airline,
    status: filteredFlights[0].status,
    arrival_gate: filteredFlights[0].arrival_gate,
    scheduled_departure:  new Date(filteredFlights[0].scheduled_departure).toLocaleString(),
    scheduled_arrival: new Date(filteredFlights[0].scheduled_arrival).toLocaleString() ,
  }
  const compiledEmail = emailTemplate(dynamic_data);


  await transporter.sendMail({
    from:process.env.SENDER_EMAIL,
    to: recipient,
    subject: subject,
     html: compiledEmail,
  });
};
module.exports = { sendEmail };