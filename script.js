document.addEventListener("DOMContentLoaded", function() {
    const backButton = document.getElementById("backButton");

    // Function to show or hide the back button based on scroll position
    function handleBackButton() {
        if (window.scrollY > 100) { // Trigger after scrolling 100px or more
            backButton.classList.remove("hidden");
            backButton.classList.add("show");
        } else {
            backButton.classList.remove("show");
            backButton.classList.add("hidden");
        }
    }

    // Check initial scroll position
    handleBackButton();  // Ensure correct visibility on page load

    // Listen for scroll events to toggle back button visibility
    window.addEventListener("scroll", handleBackButton);

    // Scroll back to the top when the back button is clicked
    backButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        backButton.classList.add("hidden"); // Hide button after scrolling to top
    });
});
