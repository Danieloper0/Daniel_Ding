document.addEventListener("DOMContentLoaded", function() {
    const backButton = document.getElementById("backButton");

    // Show the back button on page load if not on the first page
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

    // Show the back button when not on the first page
    window.addEventListener("scroll", handleBackButton);

    // Scroll back to the top when the back button is clicked
    backButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        backButton.classList.add("hidden"); // Hide the button after returning to the first page
    });
});

