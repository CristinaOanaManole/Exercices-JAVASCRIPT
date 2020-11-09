
const cloned = document.getElementById('cloned');

cloned.addEventListener('click' , clonedInput)

function clonedInput(e) {
    e.preventDefault();
    let name = document.getElementById("form").cloneNode(true);
    document.getElementById('formName').appendChild(name);
}
