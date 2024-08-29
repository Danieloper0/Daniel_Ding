window.onload = function() {
    const textElement = document.getElementById("typing-text");

    let index = 0;
    const text = "Welcome to My World\nProfessional Violinist, Aspiring Programmer, and Chess enthusiast";
    
    function type() {
        if (index < text.length) {
            textElement.innerHTML += text[index] === "\n" ? "<br>" : text[index];
            index++;
            setTimeout(type, 100); // Adjust typing speed here
        } else {
            textElement.style.borderRight = "none"; // Hide cursor once typing is done
        }
    }

    type();
};
