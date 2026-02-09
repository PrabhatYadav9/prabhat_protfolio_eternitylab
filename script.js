// DOWNLOAD CV
const cvButton = document.querySelector("#home button");

cvButton.addEventListener("click", () => {
    alert("CV download feature coming soon!");
});

// hamburger 
const ham = document.querySelector(".hamburger");
const menu = document.querySelector("nav ul");

ham.onclick = () => {
    menu.classList.toggle("active");
};

// scroll reveal
const sections = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        if (sec.getBoundingClientRect().top < window.innerHeight - 50) {
            sec.classList.add("show");
        }
    });
});





