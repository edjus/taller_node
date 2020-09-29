const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get("/", (req, res) => {
    let readable = fs.createReadStream('./public/index.html');
    // readable --> pipe --> writable
    readable.pipe(res);
});

module.exports = router;