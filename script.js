const assignments = [
    { date: "Bugün", assignment: "Matematik ödevi" },
    { date: "Bugün", assignment: "Fen projesi" },
    { date: "Yarın", assignment: "Tarih dersi notları" },
    { date: "Gelecek Günler", assignment: "İngilizce okuma" },
    { date: "Gelecek Günler", assignment: "Kimya deney raporu" },
];

function displayAssignments() {
    const tableBody = document.getElementById('assignment-table-body');

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

displayAssignments();
