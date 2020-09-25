const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=>{
  if (req.url == '/MiEvento.js'){
    const rstream = fs.createReadStream('./MiEvento.js');
    res.setHeader('Content-Type', 'text/javascript')

    rstream.on('data', (chunk)=> {
      res.end(chunk);
    })
  }

  const readStream = fs.createReadStream('./index.html');
    readStream.on('data', (chunk) => {
      res.end(chunk)
  });
});


server.listen(3000, 'localhost', ()=> {
  console.log("Escuchando en puerto", 3000)
});