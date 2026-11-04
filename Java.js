const text = document.getElementById("text");

text.addEventListener("mouseover", function() {
    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 100);

    text.style.left = x + "px";
    text.style.top = y + "px";
});