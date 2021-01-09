//ABOUT ME SECTION (if I want to bring back the read-more functionality)
    // const readMore = document.querySelector(".read-more");
    // const paragraph = document.querySelector(".about-paragraph > p")

    // function showMoreContent() {
    //     paragraph.classList.toggle("hide-content");
    //     if (paragraph.classList.contains("hide-content")) {
    //         readMore.textContent = "Read More >"
    //     } else {
    //         readMore.textContent = "Show Less >"
    //     }
    // }
    // readMore.addEventListener("click", showMoreContent);

//PROJECT SECTION
let projects = document.querySelector(".projects").children;
const cardFacingFront = [];

for(let i = 0; i < projects.length; i++){
    cardFacingFront[i] = true; //initialize unflipped cards
    projects[i].addEventListener("click", () => {
        const front = projects[i].children[0];
        const back = projects[i].children[1];
        
        if (cardFacingFront[i]) {
            front.style.transform = "rotateY(180deg)";
            back.style.transform = "rotateY(0deg)";
        } else {
            front.style.transform = "rotateY(0deg)";
            back.style.transform = "rotateY(180deg)";
        }
        cardFacingFront[i] = !cardFacingFront[i];
    });
}

