document.addEventListener("DOMContentLoaded", function() {
    const typingElement = document.querySelector(".typing-animation");

    typingElement.addEventListener("animationend", function(event) {
        if (event.animationName === "typing") {
            typingElement.style.borderRight = "none"; // Stop the blinking cursor after typing animation
        }
    });
}); 
