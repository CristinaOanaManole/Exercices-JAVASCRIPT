let resultDiv = document.getElementById("resultDiv");
let submitButton = document.getElementById("submitButton");

let calcul = (a, b) => a * b;

submitButton.onclick = function (e) {
    e.preventDefault();
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    let result = calcul(firstNumber, secondNumber);
    resultDiv.innerHTML = "<p>" + result + "</p>";
};
