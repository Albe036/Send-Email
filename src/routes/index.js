require('dotenv').config();
const { Router } = require('express');
const router = Router();
const nodemailer = require('nodemailer');

router.post('/send-email', async (req, res) =>{
    const {nombre, email, telefono, mensaje} = req.body
    //console.log(req.body)

    contentHTML = `
        <h1>Información de solicitante</h1>
        <div>
            <ul>
                <li>Nombre: ${nombre}</li>
                <li>Email: ${email}</li>
                <li>Telefono: ${telefono}</li>
            </ul>
            <p>${mensaje}</p>
        <div>
    `;

    const transporter = require('../controllers/controller')

    const info = await transporter.sendMail({
        from: `'Albeiro Lozano' <${process.env.EMAIL_RES}>`,
        to: process.env.EMAIL_REQ,
        subject: 'website CV curriculum',
        html: contentHTML 
    });

    console.log('mensaje enviado', info.messageId);

    res.send('recibido');
})


module.exports = router;