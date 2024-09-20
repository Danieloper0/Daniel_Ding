document.addEventListener("DOMContentLoaded", function() {
    const redLines = document.querySelectorAll('.underline');

    redLines.forEach(line => {
        line.classList.add('animate');
    });

    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        dropdown.addEventListener('click', function() {
            dropdownContent.classList.toggle('show');
        });
    });
});
