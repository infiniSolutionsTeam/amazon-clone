const functions = require("firebase-functions");
const express = require("express");

const cros = require("cros");

const stripe = require("stripe")('sk_test_51IIyhsL6AhrRiKLeFfMDTqTdClmpGxMHYkaVhpZxeg4NluOQ4ARvQYn2w8u2Ri54413WUhpaRmpZMwle7QkkG7jt00x16AuiDe')


//API


//App config
const app = express();

//middleware
app.use(cros({origin:true}));
app.use(express.json())

//api routes
app.get('/',(req,res) => res.status(200).send('hello world'))
//listen commands

exports.api =functions.https.onRequest(app)

