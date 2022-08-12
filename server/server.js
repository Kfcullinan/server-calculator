//create server app
const express = require('express');
const app = express();
const PORT = process.env.port || 5001;

const calculationsArray = [];

app.use(express.static('server/public'));
app.use(express.urlencoded());

//return calculation sums
app.get('/calc', (rep, res) => {
    res.send(calculationsArray);
});

app.post('/calc', (req, res) => {
let newCalc = req.body;
let answer = 0;

newCalc.numOne = Number(newCalc.numOne)
newCalc.numTwo = Number(newCalc.numTwo)

if (newCalc.operator === '+') {
    answer = newCalc.numOne + newCalc.numTwo
} else if (newCalc.operator === '-') {
    answer = newCalc.numOne - newCalc.numTwo
} else if (newCalc.operator === '*') {
    answer = newCalc.numOne * newCalc.numTwo 
} else if (newCalc.operator === '/') {
    answer = newCalc.numOne / newCalc.numTwo
}

    newCalc.answer = answer; 
    calculationsArray.push(newCalc);
    res.sendStatus(200);
});










app.listen(PORT, () => {
    console.log( 'listening on port', PORT );
});