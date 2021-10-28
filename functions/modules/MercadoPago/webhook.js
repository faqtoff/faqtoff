// MercadoPago Webhook
/**
 *  Version: 1.0
 *  Autor: FaqToff. com -> Facundo Toffolo Pasquini
 *  Documentacion de MercadoPago: https://www.mercadopago.com.ar/developers/es/guides/notifications/webhooks
 * 
 *  Este modulo guarda el Webhook de que envia MercadoPago, ademas a partir de ello se dedica a crear y actualizar los Pagos
 */
/**
 * Formato de llegada:
{
    "id": 12345,
    "live_mode": true,
    "type": "payment",
    "date_created": "2015-03-25T10:04:58.396-04:00",
    "application_id": 123123123,
    "user_id": 44444,
    "version": 1,
    "api_version": "v1",
    "action": "payment.created",
    "data": {
        "id": "999999999"
    }
}
 */
const functions = require("firebase-functions");
const fetch = require('node-fetch');

// Express Config
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors({ origin: true }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("../../client")); 

// Firebase Config
const firebase = require("firebase")
require("firebase/firestore");
const db = firebase.firestore();

// MercadoPago Config
const mercadopago = require ('mercadopago');
const mercadoPagoKeys = {
    access_token:  "APP_USR-6317427424180639-042414-47e969706991d3a442922b0702a0da44-469485398",
}
mercadopago.configure(mercadoPagoKeys);

// Funciones Generales
const guardarVenta = (datos) => {
    // Guarda en Ventas
    db.collection('Ventas')
    .doc(`${datos.external_reference}`)
    .set(datos)
    .catch((error) => {console.log({message: "invalid request", error});});
}
const obtenerPreferencia = async (pago) => {
    if ( pago.status==="approved" ) {
        // Obtiene la preferencia
        await db.collection("MercadoPago_Preferencias")
        .doc(pago.external_reference)
        .get()
        .then((doc) => {
            doc.exists && guardarVenta({...doc.data(), pago})
        })
        .catch((error) => {
            console.log("Error getting document:", error);
        });
    }
}
const obtenerPago = async (id) => {
    // Fetch para obtener el pago de la api de MercadoPago
    const pago = await fetch (`https://api.mercadopago.com/v1/payments/${id}`, {
      headers: {
        Authorization: `Bearer ${"APP_USR-6317427424180639-042414-47e969706991d3a442922b0702a0da44-469485398"}`
      }
    })
    return await pago.json();
}
const guardarPago = async ( pago) => {
    await db.collection('MercadoPago_Pago')
    .doc(`${pago.id}`)
    .set({...pago}, { merge: true })
    .then()
    .catch((error) => {console.log({message: "invalid request", error});});
}

// Webhook Function
app.post('', (req, res) => {
    let {body} = req
    const database = async () =>{
        const pago = await obtenerPago(body.data.id, res);
        guardarPago(pago)
        obtenerPreferencia(pago)
        await db.collection('MercadoPago_Webhook')
        .doc()
        .set(body)
        .then(() => {
            res.status(200).send('ok')
        })
        .catch((error) => {res.status(400).send({message: "invalid request", error});});
    }
    database()
})

exports.webhook = functions.https.onRequest(app);

