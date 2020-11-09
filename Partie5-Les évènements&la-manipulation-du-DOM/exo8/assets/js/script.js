
let cloned = document.getElementById('cloned');

cloned.addEventListener('click' , clonedInput , true)

function clonedInput(e) {
    e.preventDefault();
    let name = document.getElementById("form").cloneNode(true);
    document.getElementById('form').appendChild(name);
}
