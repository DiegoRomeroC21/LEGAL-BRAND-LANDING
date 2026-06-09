const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeMenu");
const fullscreenMenu = document.getElementById("fullscreenMenu");

menuBtn.addEventListener("click", () => {
    fullscreenMenu.classList.add("active");
    document.body.classList.add("menu-open");
});

closeMenu.addEventListener("click", () => {
    fullscreenMenu.classList.remove("active");
    document.body.classList.remove("menu-open");
});

document.querySelectorAll(".fullscreen-menu a")
.forEach(link => {
    link.addEventListener("click", () => {
        fullscreenMenu.classList.remove("active");
        document.body.classList.remove("menu-open");
    });
});



menuBtn.addEventListener("click", () => {
    fullscreenMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    fullscreenMenu.classList.remove("active");
});

const themes = [
    {
        name: "girly",
        label: "🌸"
    },
    {
        name: "executive",
        label: "💼"
    },
    {
        name: "luxury",
        label: "👑"
    }
];

let currentTheme = 0;

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    currentTheme++;

    if(currentTheme >= themes.length){
        currentTheme = 0;
    }

    document.body.classList.remove(
        "executive",
        "luxury"
    );

    const theme = themes[currentTheme];

    if(theme.name !== "girly"){
        document.body.classList.add(theme.name);
    }

    themeBtn.textContent = theme.label;
});

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");
    }

});