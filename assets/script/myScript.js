document.getElementById('toggle-link').addEventListener('click', function() {
    var electricCarsList = document.getElementById('electric-cars-list');
    var simpleView = document.getElementById('simple-view');

    electricCarsList.classList.toggle('show');
    simpleView.classList.toggle('show');
});


