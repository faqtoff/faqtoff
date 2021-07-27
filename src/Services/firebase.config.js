const firebase = require("firebase");
// Required for side-effects
require("firebase/functions");

firebase.initializeApp({
    apiKey: "AIzaSyA6MChL-9z6F8-IYSULADxf7cgeWGlsNig",
    authDomain: "faqtoff-ar.firebaseapp.com",
    projectId: "faqtoff-ar",
    storageBucket: "faqtoff-ar.appspot.com",
    messagingSenderId: "518149881728",
    appId: "1:518149881728:web:ea94aa3bc7c1e008550b65",
    measurementId: "G-NVV86W62VM"
});

var functions = firebase.functions();
var contactMe = firebase.functions().httpsCallable('contactMe');