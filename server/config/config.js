//====================================
//==== configuracion del puerto ======
//====================================

process.env.PORT = process.env.PORT || 3000;

//====================================
//==== Entorno ======
//====================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//====================================
//==== Vencimiento del Token ======
//====================================
// 60 segundos
// 60 minutos 
// 24 horas 
// 30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//====================================
//==== sEED de autenticacion======
//====================================

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//====================================
//==== Base de Datos ======
//====================================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;

//====================================
//==== Google client ID ======
//====================================

process.env.CLIENT_ID = process.env.CLIENT_ID || '406409056354-d6e8c6s1e5dms18t1361h9dv8q8i2t2u.apps.googleusercontent.com';