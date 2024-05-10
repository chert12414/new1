// Получаем содержимое файла из sessionStorage
const contents = sessionStorage.getItem('fileContents');

// Разбиваем содержимое на строки
const rows = contents.split('\n');

// Создаем таблицу
const table = document.createElement('table');

// Добавляем заголовки
const headerRow = document.createElement('tr');
const headers = rows[0].split(';');
headers.forEach(headerText => {
    const headerCell = document.createElement('th');
    headerCell.textContent = headerText.trim(); // Убираем лишние пробелы
    headerRow.appendChild(headerCell);
});
table.appendChild(headerRow);

// Добавляем строки с данными из файла
for (let i = 1; i < rows.length; i++) {
    const rowData = rows[i].split(';');
    const row = document.createElement('tr');
    rowData.forEach(cellData => {
        const cell = document.createElement('td');
        cell.textContent = cellData.trim(); // Убираем лишние пробелы
        row.appendChild(cell);
    });
    table.appendChild(row);
}

// Отображаем таблицу на странице
const tableContainer = document.getElementById('tableContainer');
tableContainer.appendChild(table);

// Находим форму добавления данных
const addDataForm = document.getElementById('addDataForm');

// Назначаем обработчик события для отправки формы
addDataForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение отправки формы

    // Получаем значения из полей формы
    const name = document.getElementById('nameInput').value.trim();
    const className = document.getElementById('classInput').value.trim();
    const informatics = document.getElementById('informaticsInput').value.trim();
    const physics = document.getElementById('physicsInput').value.trim();
    const mathematics = document.getElementById('mathematicsInput').value.trim();
    const literature = document.getElementById('literatureInput').value.trim();
    const music = document.getElementById('musicInput').value.trim();

    // Создаем новую строку для таблицы
    const newRow = document.createElement('tr');

    // Добавляем ячейки со значениями
    const nameCell = document.createElement('td');
    nameCell.textContent = name;
    newRow.appendChild(nameCell);

    const classCell = document.createElement('td');
    classCell.textContent = className;
    newRow.appendChild(classCell);

    const informaticsCell = document.createElement('td');
    informaticsCell.textContent = informatics;
    newRow.appendChild(informaticsCell);

    const physicsCell = document.createElement('td');
    physicsCell.textContent = physics;
    newRow.appendChild(physicsCell);

    const mathematicsCell = document.createElement('td');
    mathematicsCell.textContent = mathematics;
    newRow.appendChild(mathematicsCell);

    const literatureCell = document.createElement('td');
    literatureCell.textContent = literature;
    newRow.appendChild(literatureCell);

    const musicCell = document.createElement('td');
    musicCell.textContent = music;
    newRow.appendChild(musicCell);

    // Добавляем новую строку в таблицу
    table.appendChild(newRow);

    // Очищаем значения полей формы
    addDataForm.reset();
}); 



