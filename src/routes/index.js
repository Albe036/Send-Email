const { Router } = require('express');
const router = Router();
const nodemailer = require('nodemailer');

router.post('/send-email', async (req, res) =>{
    const {nombre, email, telefono, mensaje} = req.body
    //console.log(req.body)

    contentHTML = `
        <h1>Información de solicitante</h1>
        <ul>
            <li>Nombre: ${nombre}</li>
            <li>Email: ${email}</li>
            <li>Telefono: ${telefono}</li>
        </ul>
        <p>${mensaje}</p>
    `;



    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: 'albeiro.lozanop@gmail.com',
            pass: 'ufckazthmpcprtja'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const info = await transporter.sendMail({
        from: "'Albeiro Lozano' <albeiro.lozanop@gmail.com>",
        to: "albeiro036@gmail.com",
        subject: 'website CV curriculum',
        html: contentHTML 
    });

    console.log('mensaje enviado', info.messageId);

    res.send('recibido');
})


module.exports = router;