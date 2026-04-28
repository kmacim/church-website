function toggleMenu() {
    const nav = document.getElementById("navMenu");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

// For top scrolling buttoon
const [href="#top"] = document.getElementById(["href=#top"]);
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});