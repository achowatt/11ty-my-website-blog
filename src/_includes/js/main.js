//ABOUT ME SECTION
const readMore = document.querySelector(".read-more");
const paragraph = document.querySelector(".about-paragraph > p")

function showMoreContent() {
    paragraph.classList.toggle("hide-content");
    if (paragraph.classList.contains("hide-content")) {
        readMore.textContent = "Read More >"
    } else {
        readMore.textContent = "Show Less >"
    }
}
// readMore.addEventListener("click", showMoreContent);


//PROJECT SECTION
const projects = document.querySelectorAll(".project");

//keep track of card flips
let facingFront = false;

function flipCard() {
    const cardFaces = this.children;
    if (!facingFront) {
        for (const cardFace of cardFaces) {
            cardFace.classList.contains("front-card") ? 
            cardFace.style.transform = "rotateY(180deg)" :
            cardFace.style.transform = "rotateY(0deg)";
        }
    } else {
        for (const cardFace of cardFaces) {
            cardFace.classList.contains("front-card") ? 
            cardFace.style.transform = "rotateY(0deg)" :
            cardFace.style.transform = "rotateY(180deg)";
        }
    }
    facingFront = !facingFront;
}

projects.forEach(project => project.addEventListener("click", flipCard));
