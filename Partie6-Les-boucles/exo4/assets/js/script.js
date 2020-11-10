let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

let weekDay = document.getElementById('weekDay');

days.forEach(function (element) {
    let tableTd = document.createElement('td');

    if ((element == 'Samedi') || (element == 'Dimanche')) {
        tableTd.innerHTML = element.bold();
    } else {
        tableTd.innerHTML = element;
    }

    weekDay.appendChild(tableTd);
});