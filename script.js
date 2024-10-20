const assignments = [];

// JSON dosyasını oku ve assignments dizisine ekle
fetch('data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        assignments.push(...data); // JSON verisini assignments dizisine ekle
        displayAssignments(); // Verileri görüntüle
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

function displayAssignments() {
    const tableBody = document.getElementById('assignment-table-body');
    tableBody.innerHTML = ''; // Mevcut listeyi temizle

    assignments.forEach(item => {
        const row = document.createElement('tr');
        const dateCell = document.createElement('td');
        const assignmentCell = document.createElement('td');

        dateCell.textContent = item.date;
        assignmentCell.textContent = item.assignment;

        row.appendChild(dateCell);
        row.appendChild(assignmentCell);
        tableBody.appendChild(row);
    });
}

document.getElementById('assignment-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Formun varsayılan gönderimini engelle
    
    const date = document.getElementById('date').value;
    const assignment = document.getElementById('assignment').value;
    
    // Ödev verisini ekle
    assignments.push({ date: date, assignment: assignment });
    
    // Formu sıfırla
    this.reset();
    
    // Ödevlerin görüntülendiği sayfayı güncelle
    displayAssignments();
});
