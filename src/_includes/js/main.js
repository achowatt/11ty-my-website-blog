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
let projects = document.querySelector(".projects").children;
const projectFront = {};

//initialize unflipped cards
for (const index in projects) {
    projectFront[index] = false;
}

// function flipCard() {
//     const cardFaces = this.children;
//     console.log(cardFaces);
//     if (!facingFront) {
//         for (const cardFace of cardFaces) {
//             cardFace.classList.contains("front-card") ? 
//             cardFace.style.transform = "rotateY(180deg)" :
//             cardFace.style.transform = "rotateY(0deg)";
//         }
//     } else {
//         for (const cardFace of cardFaces) {
//             cardFace.classList.contains("front-card") ? 
//             cardFace.style.transform = "rotateY(0deg)" :
//             cardFace.style.transform = "rotateY(180deg)";
//         }
//     }
//     facingFront = !facingFront;
// }

for (const project of projects) {
    project.addEventListener("click", flipCard);
}