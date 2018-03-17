let filterInput = document.getElementById('filterInput');
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    let names = document.getElementById('names');
    let items = names.querySelectorAll('li.collection-item');

    for (let i = 0; i < items.length; i++) {
        let item = items[i].getElementsByTagName('a')[0];
        if (item.innerHTML.toUpperCase().indexOf(filterValue) > -1)
            items[i].style.display = '';
        else 
            items[i].style.display = 'none';
    }
}