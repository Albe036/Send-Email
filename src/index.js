require('dotenv').config();
const cors = require('cors');
const express = require('express');
const { urlencoded } = require('express');
require('colors');
const app = require('./app');



app.use(express.urlencoded({extended: false}));
app.use(express.json()); 
app.use(cors());

app.use(require('./routes/index'));


const on_server = async () =>{
    await app.listen(process.env.PORT || 4000);
    console.log(`Escuchando en el puerto ${process.env.PORT}`.green.bold);
};

on_server();