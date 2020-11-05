const named = document.getElementById("name");
const mail = document.getElementById("mail");
const age = document.getElementById("age");

// Nous définissons nos regex
const regexName = /^[a-zA-Z-éèàôêçâîù ]{1,10}$/;
const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
const regexAge = /^([0-1][0-2]\d{1}$|\d{0,2})$/;

named.onblur = function () {
	if (regexName.test(named.value) == false) {
		document.getElementById("errorNamed").textContent = "Veuillez respecter le bon format. Ex : Dupont";
	} else {
		document.getElementById("errorNamed").textContent = "Ok";
	}
}

mail.onblur = function () {
	if (regexMail.test(mail.value) == false) {
		document.getElementById("errorMail").textContent = "Veuillez respecter le bon format. Ex : exemple@mail.fr";
	} else {
		document.getElementById("errorMail").textContent = "Ok";
	}
}

age.onblur = function () {
	if (regexAge.test(age.value) == false) {
		document.getElementById("errorAge").textContent = "Vous êtes trop vieux pour aller sur internet !";
	} else {
		document.getElementById("errorAge").textContent = "Ok";
	}
}