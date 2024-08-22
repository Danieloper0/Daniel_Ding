document.addEventListener("DOMContentLoaded", function() {
    const backButton = document.getElementById("backButton");
    const exploreButton = document.getElementById("exploreButton");

    // Initial check for back button visibility
    if (window.scrollY === 0) {
        backButton.classList.add("hidden");
    }

    // Function to show or hide the back button
    function handleBackButton() {
        if (window.scrollY > 0) {
            backButton.classList.remove("hidden");
            backButton.classList.add("show");
        } else {
            backButton.classList.remove("show");
            backButton.classList.add("hidden");
        }
    }

    // Listen for scroll events
    window.addEventListener("scroll", handleBackButton);

    // Scroll back to the top when the back button is clicked
    backButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        backButton.classList.add("hidden");
    });

    // Handle the explore button click (you can define further behavior here)
    exploreButton.addEventListener("click", function() {
        console.log("Explore button clicked");
        // Add any further action here for explore button, e.g., scrolling to a section
    });
});
