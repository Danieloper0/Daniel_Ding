document.addEventListener("DOMContentLoaded", function() {
    const redLines = document.querySelectorAll('.underline');

    // Add animation class to all red lines
    redLines.forEach(line => {
        line.classList.add('animate');
    });

    // Dropdown functionality
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        dropdown.addEventListener('click', function() {
            dropdownContent.classList.toggle('show');
        });
    });
});
