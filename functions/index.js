const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors");


////////////////////////////////////////////////////////////////////////////////////////////////// CONTACT.ME
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const app = express();
app.use(cors({ origin: true }));
app.post("/", (req, res) => {
  const { body } = req;
  const isValidMessage = body.message && body.to && body.subject;
  if (!isValidMessage) {
    return res.status(400).send({ message: "invalid request" });
  }

  const APP_NAME = 'FaqToff.com'
  const gmailEmail = functions.config().gmail.email;
  const gmailPassword = functions.config().gmail.password;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: gmailEmail,
        pass: gmailPassword,
    }
  });

  const mailOptions = {
    from:`${APP_NAME} <noreply@faqtoff.com>`,
    to: body.to,
    subject: body.subject+' '+body.email,
    text: 'De:'+body.name+'  Mensaje:'+body.message
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return res.status(500).send({ message: "error " + err.message });
    }
    functions.logger.log('New email sent to:', body.to);
    return res.send({ message: "email sent" });
  });
});
module.exports.mailer = functions.https.onRequest(app);

////////////////////////////////////////////////////////////////////////////////////////////////// AUTH

const APP_NAME = 'FaqToff.com'
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
      user: gmailEmail,
      pass: gmailPassword,
  }
});
exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
  const email = user.email;
  const displayName = user.displayName;
  return sendWelcomeEmail(email, displayName);
});
exports.sendByeEmail = functions.auth.user().onDelete((user) => {
  const email = user.email;
  const displayName = user.displayName;
  return sendGoodbyeEmail(email, displayName);
});
async function sendWelcomeEmail(email, displayName) {
  const mailOptions = {
    from: `${APP_NAME} <noreply@faqtoff.com>`,
    to: email,
  };
  mailOptions.subject = `Welcome to ${APP_NAME}!`;
  mailOptions.text = `Hey ${displayName || ''}! Welcome to ${APP_NAME}. I hope you will enjoy our service.`;
  await mailTransport.sendMail(mailOptions);
  functions.logger.log('New welcome email sent to:', email);
  return null;
}
async function sendGoodbyeEmail(email, displayName) {
  const mailOptions = {
    from: `${APP_NAME} <noreply@faqtoff.com>`,
    to: email,
  };
  mailOptions.subject = `Bye!`;
  mailOptions.text = `Hey ${displayName || ''}!, We confirm that we have deleted your ${APP_NAME} account.`;
  await mailTransport.sendMail(mailOptions);
  functions.logger.log('Account deletion confirmation email sent to:', email);
  return null;
}