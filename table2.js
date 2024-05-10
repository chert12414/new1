// Получаем содержимое файла из sessionStorage
const contents = sessionStorage.getItem('fileContents');

// Разбиваем содержимое на строки
const rows = contents.split('\n');

// Создаем объект для хранения суммы и количества оценок по предметам
const subjectsData = {};

// Проходим по каждой строке, начиная с индекса 1, так как первая строка - заголовки
for (let i = 1; i < rows.length; i++) {
    const rowData = rows[i].split(';');

    // Проходим по каждому предмету в строке, начиная с индекса 2
    for (let j = 2; j < rowData.length; j++) {
        const subject = rows[0].split(';')[j].trim(); // Получаем название предмета из заголовка
        const grade = parseFloat(rowData[j].trim()); // Получаем оценку и преобразуем в число

        // Если предмет еще не был добавлен в объект subjectsData, добавляем его
        if (!subjectsData[subject]) {
            subjectsData[subject] = { sum: 0, count: 0 };
        }

        // Обновляем сумму и количество оценок по предмету
        subjectsData[subject].sum += grade;
        subjectsData[subject].count++;
    }
}

// Создаем таблицу для отображения статистики
const statisticsTable = document.getElementById('statisticsTable');

// Проходим по каждому предмету в объекте subjectsData
for (const subject in subjectsData) {
    if (subjectsData.hasOwnProperty(subject)) {
        const averageGrade = subjectsData[subject].sum / subjectsData[subject].count; // Вычисляем среднюю оценку

        // Создаем новую строку для таблицы
        const newRow = document.createElement('tr');

        // Создаем ячейку для названия предмета
        const subjectCell = document.createElement('td');
        subjectCell.textContent = subject;
        newRow.appendChild(subjectCell);

        // Создаем ячейку для средней оценки
        const averageGradeCell = document.createElement('td');
        averageGradeCell.textContent = averageGrade.toFixed(2); // Округляем среднюю оценку до двух знаков после запятой
        newRow.appendChild(averageGradeCell);

        // Добавляем новую строку в таблицу
        statisticsTable.appendChild(newRow);
    }
}

        // Извлекаем названия предметов и средние оценки
        const subjects = Object.keys(subjectsData);
        const averageGrades = subjects.map(subject => subjectsData[subject].sum / subjectsData[subject].count);

        // Создаем график
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: subjects,
                datasets: [{
                    label: 'Средняя оценка',
                    data: averageGrades,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                        
                    }
                }
            }
        });