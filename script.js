function toggleColumn() {
    var table = document.getElementById("myTable");
    var button = document.getElementById('btn');
    var isHidden = table.rows[0].cells[2].classList.contains("hidden");
    for (var i = 0; i < table.rows.length; i++) {
        table.rows[i].cells[2].classList.toggle("hidden");
    }
    button.textContent = isHidden ? 'Hide Meaning' : 'Show Meaning';
}
 
