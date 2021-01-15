const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.EMAIL_RES,
    secure: true,
    auth: {
        user: process.env.EMAIL_RES,
        pass: process.env.EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
});



module.exports = transporter;