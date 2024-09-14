// Dropdown Toggle Functionality
document.querySelectorAll('.dropdown button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent triggering window.onclick
        this.nextElementSibling.classList.toggle('show'); // Toggle visibility
    });
});

// Close dropdowns when clicking outside
window.onclick = function(event) {
    if (!event.target.matches('.dropdown button')) {
        document.querySelectorAll('.dropdown-content').forEach(content => {
            content.classList.remove('show');
        });
    }
};

document.addEventListener("DOMContentLoaded", function() {
  const dropdown = document.querySelector('.dropdown');
  const dropdownContent = document.querySelector('.dropdown-content');

  dropdown.addEventListener('click', function() {
    // Toggle visibility of the dropdown content
    dropdownContent.classList.toggle('show');
  });
});
