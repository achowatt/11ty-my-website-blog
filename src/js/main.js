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

//FIX STICK NAV TO WORK ON MOBILE
const nav = document.querySelector("nav");
const originalNavPosition = nav.offsetTop;
const placeHolder = document.querySelector(".place-holder");

function stickyNav() {
    if (window.scrollY >= originalNavPosition){
        nav.classList.add("sticky");
        nav.classList.add("addShadow");
        placeHolder.style.display = "block";
    } else if (window.scrollY < originalNavPosition){
        nav.classList.remove("sticky");
        nav.classList.remove("addShadow");
        placeHolder.style.display = "none";
    }
}

// //CHECK POSITION OF SCREEN TO HIGHLIGHT NAV BAR
// const aboutPos = document.querySelector("#about");
// const projectPos = document.querySelector("#project");
// const contactPos = document.querySelector("#contact");
// let lastScrollPos = 0;
// function pagePosition() {
//     lastScrollPos = 
//     if (window.scrollY > aboutPos.offsetTop) {
//         document.querySelector("a[href='#about']").classList.add("highlight");
//     } else {
//         document.querySelector("a[href='#about']").classList.remove("highlight");
//     }
// }

document.addEventListener("scroll", function(e){
    stickyNav();
    // pagePosition();
})