const functions = require("firebase-functions");
const nodemailer = require('nodemailer');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ origin:true }));

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

app.post('/', (req, res) => {
  const {body} = req;
  const isValidMessage = body.message && body.to && body.subjet;

  if (!isValidMessage){
     return res.status(400).send({message: 'Invalid request'}); 
  }
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailEmail,
      pass: gmailPassword,
    },
  })
  const mailOptions = {
    from: gmailEmail,
    to: body.to,
    subjet: body.subject,
    text: body.message,
  };
  transporter.sendMail(mailOptions, (err, data) => {
    if (err){
       return res.status(500).send({message: "error: " + err.message });
    }
    return res.send({message: "email sent"});
  })
})

module.exports.mailer = functions.https.onRequest(app);


/*

// firebase functions:config:set gmail.email="no.reply.faqtoff@gmail.com" gmail.password="97510862Ftp98"
/////////////////////////////////////////////////////////////////////////////////////////
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// [START sendWelcomeEmail]
//Sends a welcome email to new user.8
// [START onCreateTrigger]
exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
  // [END onCreateTrigger]
    // [START eventAttributes]
    const email = user.email; // The email of the user.
    const displayName = user.displayName; // The display name of the user.
    // [END eventAttributes]
  
    return sendWelcomeEmail(email, displayName);
  });
  // [END sendWelcomeEmail]
  
  // [START sendByeEmail]
  
  // Send an account deleted email confirmation to users who delete their accounts.
   
  // [START onDeleteTrigger]
  exports.sendByeEmail = functions.auth.user().onDelete((user) => {
  // [END onDeleteTrigger]
    const email = user.email;
    const displayName = user.displayName;
  
    return sendGoodbyeEmail(email, displayName);
  });
  // [END sendByeEmail]
  
  // Sends a welcome email to the given user.
  async function sendWelcomeEmail(email, displayName) {
    const mailOptions = {
      from: `${APP_NAME} <noreply@faqtoff.com>`,
      to: email,
    };
  
    // The user subscribed to the newsletter.
    mailOptions.subject = `Welcome to ${APP_NAME}!`;
    mailOptions.text = `Hey ${displayName || ''}! Welcome to ${APP_NAME}. I hope you will enjoy our service.`;
    await mailTransport.sendMail(mailOptions);
    functions.logger.log('New welcome email sent to:', email);
    return null;
  }
  
  // Sends a goodbye email to the given user.
  async function sendGoodbyeEmail(email, displayName) {
    const mailOptions = {
      from: `${APP_NAME} <noreply@faqtoff.com>`,
      to: email,
    };
  
    // The user unsubscribed to the newsletter.
    mailOptions.subject = `Bye!`;
    mailOptions.text = `Hey ${displayName || ''}!, We confirm that we have deleted your ${APP_NAME} account.`;
    await mailTransport.sendMail(mailOptions);
    functions.logger.log('Account deletion confirmation email sent to:', email);
    return null;
  }

  */