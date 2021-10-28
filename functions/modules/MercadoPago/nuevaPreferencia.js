const parametros = {
  back_urls: {
    success: "https://faqtoff-mp-commerce-nodejs.herokuapp.com/succes",
    failure: "https://faqtoff-mp-commerce-nodejs.herokuapp.com/failure",
    pending: "https://faqtoff-mp-commerce-nodejs.herokuapp.com/pending"
  },
  auto_return: "approved",
  payment_methods: {
    excluded_payment_methods: [
      {
        id: "amex"
      },
      {
        id: "atm"
      }
    ],
    installments: 6
  },
  notification_url: "https://us-central1-faqtoff-ar.cloudfunctions.net/webhook",
  statement_descriptor: "Tienda eCommerce Tundra Arte",
} 

// Firebase
const functions   = require("firebase-functions");
const firebase    = require("firebase");
require("firebase/firestore");

// Express Config
const express   = require("express");
const cors      = require("cors");
const app       = express();

app.use(cors({ origin: true }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("../../client")); 

// MercadoPago Config
const mercadopago     = require ('mercadopago');
const mercadoPagoKeys = {
  access_token:   "APP_USR-6317427424180639-042414-47e969706991d3a442922b0702a0da44-469485398",
  integrator_id:  ' dev_24c65fb163bf11ea96500242ac130004',
}
//functions.config().mercadopago.access_token,
//"APP_USR-631742742180639-042414-47e969706991d3a442922b0702a0da44-469485398"
mercadopago.configure(mercadoPagoKeys);

// CreatePreference Function
const db = firebase.firestore();
app.post('',(req,res) => {
  let {body} = req
  mercadopago.preferences
  .create({...parametros, items:body.items, shipments: body.shipments, external_reference:`${body.external_reference}`,})
  .then(
    function(response){
      db.collection('MercadoPago_Preferencias')
      .doc(body.external_reference)
      .set( {...response.body,}  )
      .then(
        () =>{
          return res.status(200).send(response.body)
        }
      )
      .catch(
        (error) => {
          console.log({message: "invalid request", error});
          return res.status(404).send({message: "invalid request", error})
        }
      );
    }
  )
  .catch(error => {
    console.log(error)
    return res.status(404).send(error)
  });

});

exports.nuevaPreferencia = functions.https.onRequest(app);