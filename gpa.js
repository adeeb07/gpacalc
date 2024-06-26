function addRow() {
    const table = document.getElementById('courses-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    newRow.innerHTML = `
        <td><input type="text" value="Course"></td>
        <td><input type="text" value=""></td>
        <td><input type="number" value="0"></td>
        <td><button class="remove-btn" onclick="removeRow(this)">Remove</button></td>
    `;
}

function removeRow(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}

function calculateGPA() {
    const table = document.getElementById('courses-table').getElementsByTagName('tbody')[0];
    const rows = table.getElementsByTagName('tr');
    let totalGradePoints = 0;
    let totalCredits = 0;
    const gradePoints = {
        'A': 4.0,
        'B+': 3.5,
        'B': 3.0,
        'C+': 2.5,
        'C': 2.0,
        'D': 1.0,
        'F': 0.0
    };

    for (let row of rows) {
        const grade = row.cells[1].getElementsByTagName('input')[0].value;
        const credits = parseFloat(row.cells[2].getElementsByTagName('input')[0].value);

        if (grade in gradePoints && !isNaN(credits)) {
            totalGradePoints += gradePoints[grade] * credits;
            totalCredits += credits;
        }
    }

    const gpa = totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : '--';
    document.getElementById('gpa-output').textContent = `GPA: ${gpa}`;
}
