document.querySelector("button").addEventListener("click", function() {
    const content = document.querySelector(".content");

    content.classList.add("hidden");

    setTimeout(() => {
        document.body.style.backgroundColor = "#add8e6"; 
    }, 500); 
});
