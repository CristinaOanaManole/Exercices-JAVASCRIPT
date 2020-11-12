let resultDiv = document.getElementById("resultDiv");

let firstNumber = 100;
const secondNumber = 2;


while ((firstNumber / secondNumber) >= 1) {

    let result = firstNumber / secondNumber;
    firstNumber = result;

    resultDiv.innerHTML += "<p>" + result + "</p>";
}