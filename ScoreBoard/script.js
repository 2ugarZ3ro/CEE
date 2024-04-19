document.addEventListener('DOMContentLoaded', () => {
    sortTable(2);
});

const search = document.querySelector('.input-group input'),
    tableRows = document.querySelectorAll('tbody tr'),
    tableHeadings = document.querySelectorAll('thead th');

search.addEventListener('input', searchTable);


tableHeadings.forEach((heading, index) => {
    if (index === 2) {
        heading.addEventListener('click', () => {
            sortTable(index);
        });
    }
});

function searchTable() {
    tableRows.forEach((row, i) => {
        let name = row.querySelector('td:nth-child(2)').textContent.toLowerCase(),
            searchData = search.value.toLowerCase();

        row.classList.toggle('hide', !name.includes(searchData));
        row.style.setProperty('--delay', i / 25 + 's');
    });

    document.querySelectorAll('tbody tr:not(.hide)').forEach((visibleRow, i) => {
        visibleRow.style.backgroundColor = (i % 2 == 0) ? 'transparent' : '#0000000b';
    });
}

function sortTable(columnIndex) {
    const rowsArray = Array.from(tableRows);

    rowsArray.sort((rowA, rowB) => {
        const scoreA = parseInt(rowA.querySelector(`td:nth-child(${columnIndex + 1})`).textContent);
        const scoreB = parseInt(rowB.querySelector(`td:nth-child(${columnIndex + 1})`).textContent);
        return scoreB - scoreA;
    });

    const tbody = document.querySelector('tbody');
    tbody.innerHTML = ''; 

    rowsArray.forEach(row => {
        tbody.appendChild(row);
    });
}