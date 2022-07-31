//create server app
const express = require('express');
const app = express();
const PORT = process.env.port || 5000;

app.use(express.static('server/public'));
app.use(express.urlencoded());









app.listen(PORT, () => {
    console.log( 'listening on port', PORT );
});