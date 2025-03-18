window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});



window.addEventListener("scroll", function () {
    let elements = document.querySelectorAll(".hidden");
    elements.forEach((el) => {
        let position = el.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});



