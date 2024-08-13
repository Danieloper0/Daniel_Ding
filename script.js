document.addEventListener("DOMContentLoaded", function() {
    const backButton = document.getElementById("backButton");

    // Function to show or hide the back button
    function handleBackButton() {
        if (window.scrollY > 0) {
            backButton.classList.add("show");
        } else {
            backButton.classList.remove("show");
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
        backButton.classList.remove("show"); // Hide the button after returning to the first page
    });

    // Initial check in case the page is loaded mid-scroll
    handleBackButton();
});

document.querySelector("button").addEventListener("click", function() {
    const content = document.querySelector(".content");

    content.classList.add("hidden");

    setTimeout(() => {
        document.querySelector(".hero-section").style.backgroundColor = "#add8e6"; // Adjust the color
    }, 500);
});

