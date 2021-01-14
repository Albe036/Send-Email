const { urlencoded } = require('express');
const express = require('express');
require('colors');
const nodemailer = require('nodemailer');


const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json()); 

app.use(require('./routes/index'));


const on_server = async () =>{
    await app.listen(4000);
    console.log("Escuchando en el puerto 4000".green.bold);
};

on_server();