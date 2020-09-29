const express = require('express');
const router = express.Router();

router.use("/users", (req, res, next) => {
    // Password viene en el qs
    let pass = req.query.password;
    if(pass === "12345") { // Caso OK!
        console.log("Password correcto!");
        next();
    }
    else {
        res.status(401).send("Contraseña incorrecta");
    }

});

router.use("/users", (req, res, next) => {
    let name = req.query.name;
    if(name) {
        req.name = name;
    }

    next();
});

module.exports = router;