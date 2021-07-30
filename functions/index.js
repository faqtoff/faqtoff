const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fetch = require('node-fetch');
//const Bluebird = require('bluebird');

const app = express();
app.use(cors({ origin: true }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("../../client")); 
//fetch.Promise = Bluebird;

const APP_NAME = 'Faqtoff.com'
////////////////////////////////////////////////////////////////////////////////////////////////// GMail-Config
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
      user: gmailEmail,
      pass: gmailPassword,
  }
});

const preferencia = (orderData) => {  
  fetch('https://api.mercadopago.com/checkout/preferences?access_token=APP_USR-620438098115816-072800-13009b5e96427d29e5bcda3a940f0a05-143813633',
    {
      method: 'post',
      body: JSON.stringify(orderData),
      headers: { 'Content-Type': 'application/json' },
    }
  )
  .then(respoce => {
    functions.logger.log('respoce', respoce, respoce.json());
    respoce.json()
  })
  .then(json => {
    functions.logger.log('Nueva Preferencia de MP:', json);
    return res.status(200).send(json)
  });
}
////////////////////////////////////////////////////////////////////////////////////////////////// MercadoPago-CheckOut
app.post('/create_preference',(req,res) => {
  functions.logger.log('Checkout');
  let {body} = req
  return res.status(200).send(body)
  //preferencia(body)
  
});
////////////////////////////////////////////////////////////////////////////////////////////////// GMail-CONTACT.ME
app.post("/", (req, res) => {
  const { body } = req;
  const isValidMessage = body.message && body.to && body.subject;
  if (!isValidMessage) {
    functions.logger.log('Error enviando mail-  destino:', body.to);
    return res.status(400).send({ message: "invalid request" });
  }

  const mailOptions = {
    from:`${APP_NAME} <noreply@faqtoff.com>`,
    to: body.to,
    subject: body.subject+' '+body.email,
    text: 'De:'+body.name+'  Mensaje:'+body.message
  };
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      functions.logger.log('Error enviando mail-  destino:', body.to);
      return res.status(500).send({ message: "error " + err.message });
    }
    functions.logger.log('New email sent to:', body.to);
    return res.send({ message: "email-sent" });
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////// GMail-CONTACT.AUTH
async function sendWelcomeEmail(email, displayName) {
  const mailOptions = {
    from: `${APP_NAME} <noreply@faqtoff.com>`,
    to: email,
  };
  mailOptions.subject = `Bienvenide a ${APP_NAME}!`;
  mailOptions.text = `
        Hey ${displayName || ''}! 
        Welcome to ${APP_NAME}. I hope you will enjoy our service.`;
  await transporter.sendMail(mailOptions);
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
  await transporter.sendMail(mailOptions);
  functions.logger.log('Account deletion confirmation email sent to:', email);
  return null;
}
////////////////////////////////////////////////////////////////////////////////////////////////// GMail-EXPORTS
module.exports.mailer = functions.https.onRequest(app);
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