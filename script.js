document.getElementById('menu-toggle').addEventListener('click', function () {
    this.classList.toggle('open');
    document.getElementById('slide-menu').classList.toggle('open');
});

document.getElementById('title').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent opening in a new tab
    window.location.href = 'index.html';
});
