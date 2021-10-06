const functions = require("firebase-functions");
const firebase  = require("firebase");
require("firebase/firestore");
firebase.initializeApp({
  apiKey:   "AIzaSyA6MChL-9z6F8-IYSULADxf7cgeWGlsNig",     
  authDomain:  "faqtoff-ar.firebaseapp.com", 
  projectId:    "faqtoff-ar", 
});
//functions.config().fb_config.api_key,
//functions.config().fb_config.auth_domain,
//functions.config().fb_config.project_id
// MercadoPago
const nuevaPreferencia              = require('./modules/MercadoPago/nuevaPreferencia');
const webhook                       = require("./modules/MercadoPago/webhook")
exports.nuevaPreferencia            = nuevaPreferencia.nuevaPreferencia
exports.webhook                     = webhook.webhook