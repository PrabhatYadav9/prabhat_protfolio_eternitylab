// DOWNLOAD CV
const cvButton = document.querySelector("#home button");

cvButton.addEventListener("click", () => {
    alert("CV download feature coming soon!");
});

// hamburger 
const ham = document.querySelector(".hamburger");
const menu = document.querySelector("nav ul");
const navLinks = document.querySelectorAll(".nav-link");

ham.addEventListener("click", () => {
    menu.classList.toggle("active");
});
navLinks.forEach(link =>{
    link.addEventListener("click", ()=>{
        menu.classList.remove("active");
    });
});

// SCROLL ANIMATION
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
});






