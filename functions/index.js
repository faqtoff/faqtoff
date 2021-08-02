const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const firebase = require("firebase");
require("firebase/firestore");
//const fetch = require('node-fetch');
//const Bluebird = require('bluebird');

const app = express();
app.use(cors({ origin: true }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("../../client")); 
//fetch.Promise = Bluebird;

const APP_NAME = 'Faqtoff.com'
firebase.initializeApp({
  apiKey: functions.config().fb_config.api_key,
  authDomain: functions.config().fb_config.auth_domain,
  projectId: functions.config().fb_config.project_id
});
const db = firebase.firestore();
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
////////////////////////////////////////////////////////////////////////////////////////////////// MercadoPago-Config
const mercadopago = require ('mercadopago');
const access_token = functions.config().mercadopago.access_token;
const access_token_test = functions.config().mercadopago_test.access_token;
/*mercadopago.configure({
  access_token: access_token,
});*/
mercadopago.configure({
  access_token: access_token_test,
});
////////////////////////////////////////////////////////////////////////////////////////////////// MercadoPago-CreatePreference
app.post('/create_preference',(req,res) => {
  functions.logger.log('create_preference');
  let {body} = req
  functions.logger.log('create_preference');
  mercadopago.preferences.create(body)
  .then(function(response){
    return res.status(200).send(response.body)
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////// RegistrarPago
app.get('/registrar_pago', (req, res) => {
  /*
  /registrar_pago/
  ?collection_id=16156288605
  &collection_status=approved
  &payment_id=16156288605
  &status=approved
  &external_reference=mlplesoj9b
  &payment_type=credit_card
  &merchant_order_id=3036747981
  &preference_id=799236112-3a5fa3ae-e65c-41f7-b9c8-2aa8fa42de30
  &site_id=MLA
  &processing_mode=aggregator
  &merchant_account_id=null
  */
  const database = async () =>{
    await db.collection('MercadoPago').doc(req.query.payment_id).set({
      collection_id: req.query.collection_id,
      collection_status: req.query.collection_status,
      payment_id: req.query.payment_id,
      status: req.query.collection_status,
      external_reference: req.query.external_reference,
      payment_type: req.query.payment_type,
      merchant_order_id: req.query.merchant_order_id,
      site_id: req.query.site_id,
      processing_mode: req.query.processing_mode,
      merchant_account_id: req.query.merchant_account_id
    })
    .then(() => {
      return res.status(200).send({message: "Transaccion Guardada"});
    })
    .catch((error) => {
      return res.status(400).send({message: "invalid request" , error: error});
    });
  }
  database()
})
app.post('/mp/webhook', (req, res) => {
  let {body} = req
  const database = async () =>{
    await db.collection('MercadoPago-webhook').doc(body.data?.id&&body.data.id).set(body)
    .then(() => {
      return res.status(200).send('OK');
    })
    .catch((error) => {
      return res.status(400).send({message: "invalid request" , error: error});
    });
  }
  database()
})
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
// Welcome Mail
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
// Delete Mail
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