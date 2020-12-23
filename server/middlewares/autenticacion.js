//===========================
// Verificar Token
//===========================

const jwt = require("jsonwebtoken");
const usuario = require("../models/usuario");

const verificaToken = (req, res, next) => {
    let token = req.get('token');
    console.log('token.......', token);
    console.log('process.env.SEED.......', process.env.SEED);
    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            console.log('err.......', err);
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no válido'
                }
            });
        }
        //decoded = payload
        req.usuario = decoded.usuario;
        next();
    });
};

//===========================
// Verificar AdminRole
//===========================

const verificaAdminRole = (req, res, next) => {
    let usuario = req.usuario;

    if (usuario.role !== 'ADMIN_ROLE') {
        return res.status(401).json({
            ok: false,
            err: {
                message: 'Role no válido'
            }
        });
    }
    next();

};

module.exports = {
    verificaToken,
    verificaAdminRole
}