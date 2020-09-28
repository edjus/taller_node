require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// paths estáticos
app.use('/public', express.static(__dirname + '/public'));

// Middlewares
app.use('/privado', (req, res, next)=>{
  const user = req.query.user;
  const clave = req.query.clave;

  if (user === 'usuario' && clave === 'password'){
    next();
  }
  res.status(401).send();
})

app.use('/privado', (req, res, next)=>{
  req.username = 'Pepito';
  next()
})


app.get('/',(req, res)=> {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/privado', (req, res)=>{
  res.send(`Sección privada de ${req.username}`);
});

app.listen(port, ()=>{
  console.log("Server runnig ", port);
})

