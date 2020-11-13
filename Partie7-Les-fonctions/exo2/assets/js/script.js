let textBold = document.getElementById('textBold');
let colorChanged = document.getElementById('colorChanged');
let sizeChanged = document.getElementById('sizeChanged');
let div = document.querySelector('DIV');

textBold.onclick = function () {
    div.classList.toggle('textBold');
}

colorChanged.onclick = function () {
    div.classList.toggle('colorChanged');
}

sizeChanged.onclick = function () {
    div.classList.toggle('sizeChanged');
}
