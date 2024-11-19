function toggleColumn() {
    var table = document.getElementById("myTable");
    var button = document.getElementById('btn');
    var isHidden = table.rows[0].cells[2].classList.contains("hidden");
    for (var i = 0; i < table.rows.length; i++) {
        table.rows[i].cells[2].classList.toggle("hidden");
    }
    button.textContent = isHidden ? 'Hide Meaning' : 'Show Meaning';
}
function hide_id() {
    var table = document.getElementById("myTable");   
    for (var i = 0; i < table.rows.length; i++) {
        table.rows[i].cells[0].classList.toggle("hidden");
    }    
}
// document.addEventListener('DOMContentLoaded', (event) => {
//     function findDuplicates() {
//         const table = document.getElementById('myTable');
//         const rows = table.getElementsByTagName('tr');
//         const wordMap = new Map();

//         for (let i = 0; i < rows.length; i++) {
//             const cells = rows[i].getElementsByTagName('td');
//             if (cells.length < 2) continue; // Ensure there are at least two columns
//             const id = cells[0].innerText;
//             const word = cells[1].innerText;

//             if (wordMap.has(word)) {
//                 wordMap.get(word).push(id);
//             } else {
//                 wordMap.set(word, [id]);
//             }
//         }

//         const duplicates = [];
//         wordMap.forEach((ids, word) => {
//             if (ids.length > 1) {
//                 duplicates.push({ word, ids });
//             }
//         });

//         console.log('Duplicate words and their IDs:', duplicates);
//     }
//     // Make the function accessible globally 
//     window.findDuplicates = findDuplicates;
// });

