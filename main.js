const filterInput = document.getElementById('filterInput');
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    const query = document.getElementById('filterInput').value.toUpperCase();  
    const names = document.getElementById('names');
    const items = names.querySelectorAll('li.collection-item');
    
    items.forEach(item => (contains(item, query)) ? show(item) : hide(item));
}

function contains(element, text) {
    return element.innerHTML.toUpperCase().includes(text);
}

function show(element) {
    element.style.display = '';
}

function hide(element) {
    element.style.display = 'none';
}
