

$(document).ready(onReady);

console.log('hello world');

let operator = "";

function onReady() {

    //connect buttons in html to functions
    $('.operatorButton').on('click', getOperator);
    $('#sumButton').on('click', sumButtonHandler);
    $('#clearButton').on('click', clearButtonHandler);
    getHistory();

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
    console.log("here is the test for newCalc " + newCalc);

    $.ajax({
        method: 'POST',
        url: '/calc',
        data: newCalc
    }).then(function (response) {
        console.log(response);
        getHistory();
    });
}




function getHistory() {

    $.ajax({
        method: 'GET',
        url: '/calc'
    }).then(function (response) {
        console.log(response);
        // $('#postCalcs').empty();
        for (let i = 0; i < response.length; i++) {
            let newCalc = response[i];
            $('#postCalcs').append(`
                <tr>
                    <td>${newCalc.answer}</td>
                </tr>
            `);
        }
    });

}
function clearButtonHandler() {
    $('input').val('');
};

