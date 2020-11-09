for (let i = 2020; i <= 2030; i++) {
    let span = document.createElement("span");
    span.innerHTML += i+' ';
    if (i % 100 == 0 && i % 400 == 0 || i % 4 == 0){
        span.style.color='red';
    }
    document.body.appendChild(span);
}  


