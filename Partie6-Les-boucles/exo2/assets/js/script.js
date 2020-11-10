for (let number = 1; number <= 100; number++) {
    let div = document.createElement('div');
    if (number % 15 == 0) {
        div.innerHTML = '...';
    } else {
        div.innerHTML = number;
    }
    document.body.appendChild(div);
}