const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors");

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
    from: process.env.EMAIL,
    to: body.to,
    subject: body.subject+' '+body.email,
    text: 'De:'+body.name+'  Mensaje:'+body.message
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return res.status(500).send({ message: "error " + err.message });
    }

    return res.send({ message: "email sent" });
  });
});

module.exports.mailer = functions.https.onRequest(app);
