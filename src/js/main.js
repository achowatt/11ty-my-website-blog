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

//CHECK POSITION OF SCREEN TO HIGHLIGHT NAV BAR
const aboutPos = document.querySelector("#about");
const projectPos = document.querySelector("#projects");
const contactPos = document.querySelector("#contact");
//Select all nav elements
const navElements = document.querySelectorAll("nav ul li a");

function pagePosition() {
    if (window.scrollY > (aboutPos.offsetTop - (window.innerHeight / 3)) && window.scrollY < (projectPos.offsetTop - (window.innerHeight/2))) { 
        navElements.forEach((element)=> element.classList.remove("highlight"));
        document.querySelector("a[href='#about']").classList.add("highlight");
    } else if (window.scrollY > (projectPos.offsetTop - (window.innerHeight / 3)) && window.scrollY < (contactPos.offsetTop - (window.innerHeight / 2))) {
        navElements.forEach((element)=> element.classList.remove("highlight"));
        document.querySelector("a[href='#projects']").classList.add("highlight");
    } else if (window.scrollY > (contactPos.offsetTop - (window.innerHeight / 3))) {
        navElements.forEach((element)=> element.classList.remove("highlight"));
        document.querySelector("a[href='#contact']").classList.add("highlight");
    } else {
        navElements.forEach((element)=> element.classList.remove("highlight"));
    }
}

document.addEventListener("scroll", function(e){
    stickyNav();
    pagePosition();
})