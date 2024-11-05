function toggleColumn() {
    var table = document.getElementById("myTable");
    var button = document.getElementById('btn');
    var isHidden = table.rows[0].cells[2].classList.contains("hidden");
    for (var i = 0; i < table.rows.length; i++) {
        table.rows[i].cells[2].classList.toggle("hidden");
    }
    button.textContent = isHidden? 'Hide Meaning': 'Show Meaning';
} 
// function setId(id){
//     var table = document.getElementById("myTable");
//     for (var i = 1; i < table.rows.length; i++){
//         table.rows[i].cells[0].textContent = i + id -1;
//     }
// }  