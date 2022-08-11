//create server app
const express = require('express');
const app = express();
const PORT = process.env.port || 5000;

const calculationsArray = [];

//return calculation sums
app.get('/calc', (rep, res) => {
    res.send(calculationsArray);
});

app.post('/calc', (req, res) => {
let newCalc = req.body;
console.log(typeof newCalc.numOne);

let answer = mathymath(newCalc.numOne, newCalc.numTwo, newCalc.operator);
    // newCalc.answer = answer; 
    mathAnswer.push(answer);
    res.sendStatus(200);
});
app.use(express.static('server/public'));
app.use(express.urlencoded());









app.listen(PORT, () => {
    console.log( 'listening on port', PORT );
});