// Change About Me text on button click
const aboutText = document.getElementById("about-text");
const aboutButton = document.getElementById("about-button");

aboutButton.addEventListener("click", () => {
    aboutText.textContent = "I'm learning JavaScript through Techtonica and building projects with HTML and CSS.";
});