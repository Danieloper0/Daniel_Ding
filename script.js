document.addEventListener("DOMContentLoaded", function() {
  const backButton = document.getElementById("backButton");
  const scrollThreshold = 100; // Define a constant for the scroll threshold

  // Function to show or hide the back button based on scroll position
  function toggleBackButton() {
    if (window.scrollY > scrollThreshold) {
      backButton.classList.replace("hidden", "show"); // Use classList.replace for a more efficient toggle
    } else {
      backButton.classList.replace("show", "hidden");
    }
  }

  // Check initial scroll position
  toggleBackButton(); // Ensure correct visibility on page load

  // Listen for scroll events to toggle back button visibility
  window.addEventListener("scroll", toggleBackButton);

  // Scroll back to the top when the back button is clicked
  backButton.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    backButton.classList.add("hidden"); // Hide button after scrolling to top
  });
});
