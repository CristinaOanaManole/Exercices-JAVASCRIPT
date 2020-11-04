let submiButton = document.getElementById('submitButton');
    submiButton.onclick = function (e) {
        e.preventDefault();
    let password = document.getElementById('password');
    let passwordConfirm = document.getElementById('passwordConfirm');

    if (password.value == passwordConfirm.value) {
            password.style.borderColor = 'green';
            passwordConfirm.style.borderColor = 'green';
    } else {
        password.style.borderColor = 'red';
        passwordConfirm.style.borderColor = 'red';
    }
}
