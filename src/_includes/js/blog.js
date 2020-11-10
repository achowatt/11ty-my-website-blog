// document.querySelector(".contact-info-btn").addEventListener("click", function(){
//     this.classList.add("clicked")
//     document.querySelector("body").style.overflow = "hidden"
// });

const backToTopBtn = document.querySelector(".back-to-top");

window.addEventListener('scroll', function(e) {
    if (window.scrollY > 500){
        backToTopBtn.style.display= "block";
    } else {
        backToTopBtn.style.display= "none";
    }
});


backToTopBtn.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}