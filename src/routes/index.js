const { Router } = require('express');
const router = Router();

router.post('/send-email', (req, res) =>{
    const {nombre, apellido} = req.body
    console.log(req.body);
    console.log(nombre)
    console.log(apellido)
    res.send('recibido');
})


module.exports = router;