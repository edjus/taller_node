const express = require('express');
const router = express.Router();
const UsersService = require('../services/users');

router.get("/", async (req, res) => {
    if(req.name) {
        console.log("El usuario logueado es:", req.name);
    }
    else {
        console.log("No hay ningún usuario logueado");
    }

    let users = await UsersService.getUsers();
    res.json(users);
});

router.get("/:id", async (req, res) => {
    let id = req.params.id; // sanitizar el parámetro
    if(id) {
        let users = await UsersService.getUserById(req.params.id);
        res.json(users);
    }
    else {
        // ... 
        res.json(null);
    }
})

router.post("/", async (req, res) => {
    const { nombre, apellido } = req.body;
    const user = { nombre, apellido };

    const userCreated = await UsersService.save(user);

    res.status(201).send(userCreated);
})



module.exports = router;