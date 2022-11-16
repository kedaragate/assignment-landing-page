const exploreIcon = document.getElementsByClassName("fa-magnifying-glass")[0];

exploreIcon.addEventListener("mouseover", () => {
  exploreIcon.classList.add("fa-flip");
});
exploreIcon.addEventListener("mouseout", () => {
  exploreIcon.classList.remove("fa-flip");
});

const hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0];
const navLinksContainer = document.getElementsByClassName(
  "nav-links-container"
)[0];
hamburgerMenu.addEventListener("click", () => {
 return navLinksContainer.style.transform=(navLinksContainer.style.transform=="translateX(-200%)")?"none":
"translateX(-200%)";
}


