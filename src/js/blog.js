const backToTopBtn = document.querySelector(".back-to-top");

window.addEventListener('scroll', function(e) {
    window.scrollY > 500 ? 
        backToTopBtn.classList.remove("hide"): 
        backToTopBtn.classList.add("hide")
});


backToTopBtn.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}