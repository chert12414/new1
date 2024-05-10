function handleFile() {
    const fileInput = document.getElementById('fileInput');
    const uploadStatus = document.getElementById('uploadStatus');

    const file = fileInput.files[0];

    if (file) {
        if (file.type === 'text/csv' || file.type === 'text/plain') {
            const reader = new FileReader();

            reader.readAsText(file, 'windows-1251');

            reader.onload = function(event) {
                const contents = event.target.result;

                uploadStatus.textContent = 'Файл успешно загружен';
                sessionStorage.setItem('fileContents', contents);
            };
        } else {
            uploadStatus.textContent = 'Формат файла не поддерживается: ' + file.type;
        }
    } else {
        uploadStatus.textContent = 'Файл не выбран';
    }
}