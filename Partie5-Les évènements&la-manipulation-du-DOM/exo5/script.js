let pinkButton = document.getElementById('pink');
let blueButton = document.getElementById('blue');
let purpleButton = document.getElementById('purple');
let boldButton = document.getElementById('bold');
let italicsButton = document.getElementById('italics');


pinkButton.onclick = function ()
{
    pinkButton.style.color = '#FC6EB9';
} 

blueButton.onclick = function ()
{
    blueButton.style.color = '#2260FC';
}

purpleButton.onclick = function ()
{
    purpleButton.style.color = '#A722FC';
}

boldButton.onclick = function ()
{
    boldButton.style.fontWeight = "bold";
}

italicsButton.onclick = function ()
{
    italicsButton.style.fontStyle ='italic';
}