document.addEventListener('DOMContentLoaded', function () {
    const repeatCount = 15;
    for (let i = 0; i <= repeatCount; i++) {
        fetchDataAndDisplay();
    }
})

function fetchDataAndDisplay() {
    const apiUrl = 'https://randomuser.me/api';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#data-table tbody');
            data.results.forEach(user => {
                const row = document.createElement('tr');

                const cellName = document.createElement('td');
                cellName.textContent = `${user.name.first} ${user.name.last}`;
                row.appendChild(cellName);

                const gender = document.createElement('td');
                gender.textContent = user.gender;
                row.appendChild(gender)

                const cellEmail = document.createElement('td');
                cellEmail.textContent = user.email;
                row.appendChild(cellEmail);

                const cellLocation = document.createElement('td');
                cellLocation.textContent = `${user.location.city}, ${user.location.country}`;
                row.appendChild(cellLocation);

                const cellPicture = document.createElement('td');
                const img = document.createElement('img');
                img.src = user.picture.thumbnail;
                img.alt = 'User Thumbnail';
                img.style.width = '50px';
                img.style.height = '50px';
                cellPicture.appendChild(img);
                row.appendChild(cellPicture);

                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Fehler beim Abrufen der Daten:', error))
}