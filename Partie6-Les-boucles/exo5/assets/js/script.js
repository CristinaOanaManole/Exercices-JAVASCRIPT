let resultDiv = document.getElementById("resultDiv");

const firstNumber = 2;
let secondNumber = 2;


while ((firstNumber * secondNumber) <= 250) {

    let result = firstNumber * secondNumber;
    secondNumber = result;

    resultDiv.innerHTML += "<p>" + result + "</p>";
}