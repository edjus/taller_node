const Perro = require('./Perro');

const perro1 = new Perro('Pluto');

console.log(perro1.ladrar())

const fs = require('fs')

const texto = fs.readFileSync(__dirname+'/archivo.txt', 'utf8')
console.log(texto)

fs.readFile(__dirname + '/archivo.txt','utf8', (err, data) => {
  const textoasync = data
  console.log(`async: ${textoasync}`)
})