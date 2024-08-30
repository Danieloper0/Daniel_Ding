window.onload = function() {
    const textElement = document.getElementById("typing-text");

    if (textElement) {
        let index = 0;
        const text = "Welcome to My World\nProfessional Violinist, Aspiring Programmer, and Chess enthusiast";
        
        function type() {
            if (index < text.length) {
                textElement.innerHTML += text[index] === "\n" ? "<br>" : text[index];
                index++;
                setTimeout(type, 100);
            } else {
                textElement.style.borderRight = "none";
            }
        }

        type();
    } else {
        console.error("Element with id 'typing-text' not found.");
    }
};
