// Toggle Menu and Button Animation
document.getElementById('menuButton').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    var menuButton = document.getElementById('menuButton');
    
    menu.classList.toggle('active');
    menuButton.classList.toggle('tilt');
});
