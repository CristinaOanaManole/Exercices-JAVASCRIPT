let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++', 'ruby', 'python'];

let cristinaRow = document.getElementById('cristinaRow');

languages.forEach(element => {
    let cristinaTd = document.createElement('td');
    cristinaTd.innerHTML = element;
    cristinaRow.appendChild(cristinaTd);
});