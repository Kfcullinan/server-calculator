console.log('hello world');

$(document).ready(onReady);

function onReady() {

    //connect buttons in html to functions
    $('operatorButton').on('click', getOperator)
    $('#sumButton').on('click', sumButtonHandler);
$('#clearButton').on('click', clearButtonHandler);
}