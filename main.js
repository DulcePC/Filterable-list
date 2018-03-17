const filterInput = document.getElementById('filterInput');
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    const filterValue = document.getElementById('filterInput').value.toUpperCase();
    const names = document.getElementById('names');
    const items = names.querySelectorAll('li.collection-item');

    for (let i = 0; i < items.length; i++) {
        const item = items[i].getElementsByTagName('a')[0];
        if (item.innerHTML.toUpperCase().indexOf(filterValue) > -1)
            items[i].style.display = '';
        else 
            items[i].style.display = 'none';
    }
}