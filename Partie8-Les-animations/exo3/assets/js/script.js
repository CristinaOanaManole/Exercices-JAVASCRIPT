let para = document.querySelectorAll('p');

para.forEach(element => {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 10) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    })
})