document.addEventListener("DOMContentLoaded", function() {
  const redLines = document.querySelectorAll('.red-line');

  // Animate red lines on load
  redLines.forEach(line => {
    line.classList.add('animate');
  });

  // Dropdown functionality
  const dropdown = document.querySelector('.dropdown');
  const dropdownContent = document.querySelector('.dropdown-content');

  dropdown.addEventListener('click', function() {
    dropdownContent.classList.toggle('show');
  });
});
