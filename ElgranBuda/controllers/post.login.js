
const express = require('express');
const router = express.Router();
const User = require('../models/user');

/**
 * Endpoint encargado de verificar si ingreso bien los datos registrados con anterioridad
 */
router.post('/lobby', async (req, res) => {

    const { user, password } = req.body;

    User.findOne({ user }, (err, user) => {

        if (err) {
            res.status(500).send('ERROR AL REGISTRAR AL USUARIO');
        } else if (!user) {
            res.status(500).send('USUARIO NO EXISTE');
        } else {

            user.isCorrectPassword(password, (err, resut) => {

                if (err) {
                    res.status(500).send('ERROR AL AUTENTICAR');
                } else if (resut) {
                    res.status(200).send('USUARIO AUTENTICADO CORRECTAMENTE');
                } else {
                    res.status(400).send('USUARIO Y/O CONTRASEÑA INCORRECTA');
                }

            });
         }
    });

});


module.exports = router;