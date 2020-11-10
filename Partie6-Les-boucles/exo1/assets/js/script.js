for (let year = 2020; year <= 2030; year++) {
    let span = document.createElement("span");
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        span.style.color = 'red';
    }
    span.innerHTML = year + ' ';
    document.body.appendChild(span);
}