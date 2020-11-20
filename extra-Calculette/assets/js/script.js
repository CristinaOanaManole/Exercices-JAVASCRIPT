let clear = document.getElementById("clear");
let modulo = document.getElementById("modulo");
let division = document.getElementById("division");
let plusMoins = document.getElementById("plusMoins");

let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let multiplication = document.getElementById("multiplication");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let substraction = document.getElementById("substraction");

let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let add = document.getElementById("add");

let zero = document.getElementById("zero");
let decimalPoint = document.getElementById("decimalPoint");
let total = document.getElementById("egal");

let numberOne = document.getElementById("firstNumber");
let operator = document.getElementById("result");
let numberTwo = document.getElementById("secondNumber");

let resultat = numberOne;

zero.onclick = function () {
    resultat.value += zero.value;
}

one.onclick = function () {
    resultat.value += one.value;
}

two.onclick = function () {
    resultat.value += two.value;
}

three.onclick = function () {
    resultat.value += three.value;
}

four.onclick = function () {
    resultat.value += four.value;
}

five.onclick = function () {
    resultat.value += five.value;
}

six.onclick = function () {
    resultat.value += six.value;
}

seven.onclick = function () {
    resultat.value += seven.value;
}

eight.onclick = function () {
    resultat.value += eight.value;
}

nine.onclick = function () {
    resultat.value += nine.value;
}

multiplication.onclick = function () {
    operator.innerText = multiplication.value;
    resultat = numberTwo;
}

substraction.onclick = function () {
    operator.innerText = substraction.value;
    resultat = numberTwo;
}

add.onclick = function () {
    operator.innerText = add.value;
    resultat = numberTwo;
}

division.onclick = function () {
    operator.innerText = division.value;
    resultat = numberTwo;
}

clear.onclick = function () {
    resultat.value = clear.value;
    operator.innerText = clear.value;
    document.getElementById("firstNumber").value = clear.value;
    finalResult.value = clear.value;
    resultat = numberOne;
}

decimalPoint.onclick = function () {
    resultat.value += decimalPoint.value;
}

total.onclick = function () {
    if (operator.innerText == add.value) {
        finalResult.value = parseFloat(numberOne.value) + parseFloat(numberTwo.value);
    }
    if (operator.innerText == multiplication.value) {
        finalResult.value = parseFloat(numberOne.value) * parseFloat(numberTwo.value);
    }
    if (operator.innerText == substraction.value) {
        finalResult.value = parseFloat(numberOne.value) - parseFloat(numberTwo.value);
    }
    if (operator.innerText == division.value) {
        finalResult.value = parseFloat(numberOne.value) / parseFloat(numberTwo.value);
    }
}
