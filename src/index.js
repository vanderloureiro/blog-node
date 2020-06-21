// para tratamento de rotas
const express = require('express');

// para entender JSON e parâmetros de rotas
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/authController')(app);

app.listen(3000);

