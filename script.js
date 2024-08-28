<div class="hero">
    <h1 class="typing-animation">Welcome to My World</h1>
</div>

<script>
    // JavaScript to stop the caret blinking after the typing animation completes
    document.addEventListener("DOMContentLoaded", function() {
        const typingElement = document.querySelector(".typing-animation");

        // Determine when the typing animation ends
        typingElement.addEventListener("animationend", function(event) {
            if (event.animationName === "typing") {
                typingElement.style.borderRight = "none"; // Remove the blinking caret
            }
        });
    });
</script>
