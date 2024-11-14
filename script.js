function toggleColumn() {
    var table = document.getElementById("myTable");
    var button = document.getElementById('btn');
    var isHidden = table.rows[0].cells[2].classList.contains("hidden");
    for (var i = 0; i < table.rows.length; i++) {
        table.rows[i].cells[2].classList.toggle("hidden");
    }
    button.textContent = isHidden ? 'Hide Meaning' : 'Show Meaning';
}
function navbar() {
    const pages = [
        { href: 'index.html', text: 'Page 1 (1-100)' }, 
        { href: 'page2.html', text: 'Page 2 (101-200)' }, 
        { href: 'page3.html', text: 'Page 3 (201-300)' }, 
        { href: 'page4.html', text: 'Page 4 (301-400)' }, 
        { href: 'page5.html', text: 'Page 5 (401-500)' }, 
        { href: 'page6.html', text: 'Page 6 (501-600)' }, 
        { href: 'page7.html', text: 'Page 7 (601-700)' }, 
        { href: 'page8.html', text: 'Page 8 (701-800)' },
        { href: 'page9.html', text: 'Page 9 (801-900)' },
        { href: 'page10.html', text: 'Page 10 (901-1000)' }
    ]; 

        const navbarList = document.getElementById('navbar-list'); 
        pages.forEach((page, index) => { 
            const li = document.createElement('li'); 
            li.className = 'nav-item'; 
            const a = document.createElement('a'); 
            a.className = 'nav-link'; 
            a.href = page.href; 
            a.textContent = page.text; 
            li.appendChild(a); 
            navbarList.appendChild(li); 
        });
}

