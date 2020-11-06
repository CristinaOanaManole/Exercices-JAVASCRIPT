let pinkButton = document.getElementById('pink');
let blueButton = document.getElementById('blue');
let purpleButton = document.getElementById('purple');
let boldButton = document.getElementById('bold');
let italicButton = document.getElementById('italic');
let textChange = document.querySelector('p');

pinkButton.onclick = function () {
    pinkButton.classList.toggle('pinkBackgroundColor');
    textChange.classList.toggle('pinkTextColor');
}

blueButton.onclick = function () {
    blueButton.classList.toggle('blueBackgroundColor');
    textChange.classList.toggle('blueTextColor');
}

purpleButton.onclick = function () {
    purpleButton.classList.toggle('purpleBackgroundColor');
    textChange.classList.toggle('purpleTextColor');
}

boldButton.onclick = function () {
    boldButton.classList.toggle('boldText');
    textChange.classList.toggle('boldText');
}

italicButton.onclick = function () {
    italicButton.classList.toggle('italicText');
    textChange.classList.toggle('italicText');
}
