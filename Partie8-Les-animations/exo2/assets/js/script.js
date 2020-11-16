let navbarBrand = document.getElementById('navbarBrand');
let hoverUl = document.getElementById('hoverUl');
let hoverUli = document.getElementById('hoverUli');
let hoverUlii = document.getElementById('hoverUlii');
let hoverUliii = document.getElementById('hoverUliii');
let hoverUliiii = document.getElementById('hoverUliiii');
let fables = document.querySelectorAll('a');


navbarBrand.addEventListener('mouseover', function (e) {
  e.preventDefault();
  navbarBrand.style.transform = 'rotate(-10deg)'
});

hoverUl.addEventListener('mouseover', function (e) {
  e.preventDefault();
  hoverUl.style.transform = 'rotate(-10deg)'
});

hoverUli.addEventListener('mouseover', function (e) {
  e.preventDefault();
  hoverUli.style.transform = 'rotate(-10deg)'
});

hoverUlii.addEventListener('mouseover', function (e) {
  e.preventDefault();
  hoverUlii.style.transform = 'rotate(-10deg)'
});

hoverUliii.addEventListener('mouseover', function (e) {
  e.preventDefault();
  hoverUliii.style.transform = 'rotate(-10deg)'
});

hoverUliiii.addEventListener('mouseover', function (e) {
  e.preventDefault();
  hoverUliiii.style.transform = 'rotate(-10deg)'
});

fables.forEach(fable => {
  fable.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(fable.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});