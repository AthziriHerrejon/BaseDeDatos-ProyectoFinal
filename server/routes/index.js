const express = require('express');

const app = express();

app.use(require('./Registrousuario'));
app.use(require('./login'));



module.exports = app;