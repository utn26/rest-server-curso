const express = require('express')
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario')
const app = express()


app.post('/login', function(req, res) {

    let body = req.body;
    const ERROR_MESSAGE = 'Usuario o contraseña incorrectos';

    Usuario.findOne({ email: body.email }, (err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        if (!usuarioDB) {
            return res.status(500).json({
                ok: false,
                err: {
                    message: ERROR_MESSAGE
                }
            });
        }
        if (!bcrypt.compareSync(body.password, usuarioDB.password)) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: ERROR_MESSAGE
                }
            });
        }
        let token = jwt.sign({
            usuario: usuarioDB
        }, process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN });
        return res.json({
            ok: true,
            usuario: usuarioDB,
            token

        });
    })

})


module.exports = app;