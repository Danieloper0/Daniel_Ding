// Dropdown Toggle Functionality
document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', function() {
        this.classList.toggle('show');
    });
});

// Close the dropdown if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('.dropdown')) {
        var dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(dropdown => {
            dropdown.parentNode.classList.remove('show');
        });
    }
};
