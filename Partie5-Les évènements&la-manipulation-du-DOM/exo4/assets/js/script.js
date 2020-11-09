let imageManip = document.querySelector('img');

imageManip.onclick = function () {

	if (imageManip.src.match("assets/img/pexels-tir.jpg")) {
		imageManip.src = "assets/img/pexels-photo.jpeg";
		imageManip.title = "chien";
	} else {
		imageManip.src = "assets/img/pexels-tir.jpg";
	}
}

imageManip.onmouseover = function () {
	imageManip.style.width = "50rem";
}

imageManip.onmouseleave = function () {
	imageManip.style.width = "40rem";
}   
