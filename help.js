document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('hr-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (confirm('Вы действительно хотите отправить эти данные?')) {
            const formData = new FormData(form);
            const csvData = [];

            formData.forEach((value, key) => {
                csvData.push(`${key},"${value.replace(/"/g, '""')}"`);
            });

            const csvContent = 'data:text/csv;charset=utf-8,' + '\uFEFF' + csvData.join('\n');
            const encodedUri = encodeURI(csvContent);
            const link = document.createElement('a');
            link.setAttribute('href', encodedUri);
            link.setAttribute('download', 'data.csv');
            document.body.appendChild(link);
            link.click();
        }
    });
});