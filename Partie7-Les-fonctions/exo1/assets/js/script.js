
let firstNumber = document.getElementById('firstNumber');
let secondNumber = document.getElementById('secondNumber');
let submitButton = document.getElementById('multiplyBy');

function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}
