const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors({ origin: true }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("../../client"));

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

////////////////////////////////////////////////////////////////////////////////////////////////// MercadoPago-Config
const mercadopago = require ('mercadopago');
//middleware
//app.use(bodyParser.urlencoded({ extended: false }))
// Agrega credenciales
mercadopago.configure({
  access_token: 'APP_USR-4699093593447400-073003-e66fa5115a012dedc7dc3a82e31f59df-799236112'
});
////////////////////////////////////////////////////////////////////////////////////////////////// MercadoPago-CheckOut
app.post('/create_preference',(req,res) => {
  functions.logger.log('Checkout');
  res.redirect('https://faqtoff.com');
  /*
  let preference = {
    items: [
      {
        title: req.body.title,
        unit_price: req.body.price,
        quantity: req.body.quantity,
      }
    ],
		back_urls: {
			"success": "http://localhost:8080/feedback",
			"failure": "http://localhost:8080/feedback",
			"pending": "http://localhost:8080/feedback"
		},
		auto_return: 'approved',
  };
  mercadopago.preferences.create(preference)
  .then(function(response){

    res.redirect(response.body.init_point);
    
  }).catch(function(error){
    console.log(error);
    res.redirect('https://faqtoff.com');
  });
  */
});
app.get('/feedback', function(request, response) {
  response.json({
   Payment: request.query.payment_id,
   Status: request.query.status,
   MerchantOrder: request.query.merchant_order_id
 })
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
    return res.send({ message: "email sent" });
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