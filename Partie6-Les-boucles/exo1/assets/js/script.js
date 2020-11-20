for (let year = 2020; year <= 2030; year++) {
    let div = document.createElement("div");
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        div.style.color = 'red';
    }
    div.innerHTML = year + ' ';
    document.body.appendChild(div);
}