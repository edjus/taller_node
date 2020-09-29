require('dotenv').config();
const express = require('express');
const app = express(); 
// Base de datos en SQL
require('./database');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

// ROUTES (onda MVC) --> en realidad vamos a orientarnos a hacer API rest
// controllers | routes + controllers
const UsersRoute = require('./routes/users'); // 1. Importo routes
const HomeRoute = require('./routes/home');

const UsersMiddleware = require('./middlewares/users');

// Body-Parsers
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static Path
app.use("/public", express.static(__dirname + "/public"));

// MIDDLEWARES
app.use("/users", UsersMiddleware);

// ROUTES
app.use("/", HomeRoute);
app.use("/users", UsersRoute); // 2. Aplico las rutas

app.listen(port, () => {
    console.log("Servidor corriendo!");
});