//create server app
const express = require('express');
const app = express();
const PORT = process.env.port || 5000;

const calculationsArray = [];

//return calculation sums
app.get('/calculations', (rep, res) => {
    res.send(calculationsArray);
});

app.post('/calculations', (req, res) => {
const calculations = req.body;
console.log(req.body);
});
app.use(express.static('server/public'));
app.use(express.urlencoded());









app.listen(PORT, () => {
    console.log( 'listening on port', PORT );
});