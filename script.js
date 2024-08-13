document.addEventListener("DOMContentLoaded", function() {
    const backButton = document.getElementById("backButton");
    const heroSection = document.getElementById("heroSection");

    // Function to show or hide the back button
    function handleBackButton() {
        if (window.scrollY > 0) {
            backButton.classList.add("show");
        } else {
            backButton.classList.remove("show");
        }
    }

    
    window.addEventListener("scroll", handleBackButton);

    
    backButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        backButton.classList.remove("show"); 

    handleBackButton();
});
