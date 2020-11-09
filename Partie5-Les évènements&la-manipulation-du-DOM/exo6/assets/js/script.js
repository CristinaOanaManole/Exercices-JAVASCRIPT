const name = document.getElementById("name");
const mail = document.getElementById("mail");

name.onfocus = function () {
	document.getElementById('name').style.border = '3px solid black';
}

mail.onfocus = function () {
	document.getElementById('mail').style.border = '3px solid black';
}

name.onblur = function () {
	document.getElementById('name').style.border = '';
}

mail.onblur = function () {
	document.getElementById('mail').style.border = '';
}