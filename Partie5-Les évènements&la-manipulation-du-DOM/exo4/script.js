let imageManip = document.getElementById('img');

imageManip.onclick = function () {

	if (imageManip.src.match("kingdom.jpg")) {
		imageManip.src = "assets/img/witcher3.jpg";
		imageManip.title = "witcher3";
	} else {
		imageManip.src = "assets/img/kingdom.jpg";
	}
}

imageManip.onmouseover = function () {
	imageManip.style.width = "50rem";
}

imageManip.onmouseleave = function () {
	imageManip.style.width = "40rem";
}   