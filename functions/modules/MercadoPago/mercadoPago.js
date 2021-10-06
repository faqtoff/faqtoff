const functions   = require("firebase-functions");

// MercadoPago Config
const mercadopago     = require ('mercadopago');
const mercadoPagoKeys = {
  access_token: functions.config().mercadopago.access_token,
}
mercadopago.configure(mercadoPagoKeys);

const nuevaPreferencia              = require("./nuevaPreferencia")
exports.nuevaPreferencia            = nuevaPreferencia.nuevaPreferencia
const webhook                       = require("./webhook")
exports.webhook                     = webhook.webhook