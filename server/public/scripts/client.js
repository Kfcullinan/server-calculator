console.log('hello world');

let operator = "";

$(document).ready(onReady);

function onReady() {

    //connect buttons in html to functions
    $('operatorButton').on('click', getOperator)
    $('#sumButton').on('click', sumButtonHandler);
$('#clearButton').on('click', clearButtonHandler);

};

function getOperator() {
    operator = this.innerHTML;
    console.log(operator);
};

function sumButtonHandler() {
    const newCalc = {
        numOne: $('#firstNumber').val(),
        numTwo: $('#secondNumber').val(),
        operator: operator 
    };
    console.log(newCalc);
}

$.ajax({
    method: 'POST',
    url: '/calc',
    data: newCalc
}).then(function (response) {
    console.log(response);
    $.ajax({
        method: 'GET',
        url: '/calc'
    }).then(function (response) {
        console.log(response);
        $('#postCalcs').empty();
        $('#postCalcs').append(response);
    })
});
function clearButtonHandler() {
    $('input').val('');
};