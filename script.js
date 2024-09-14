// Dropdown Toggle Functionality
document.querySelectorAll('.dropbtn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent triggering window.onclick
        this.nextElementSibling.classList.toggle('show'); // Toggle visibility
    });
});

// Close dropdowns when clicking outside
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        document.querySelectorAll('.dropdown-content').forEach(content => {
            content.classList.remove('show');
        });
    }
};
