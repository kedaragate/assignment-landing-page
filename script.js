

const hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0];
const navLinksContainer = document.getElementsByClassName(
  "nav-links-container"
)[0];
hamburgerMenu.addEventListener("click", () => {
 navLinksContainer.style.transform=(navLinksContainer.style.transform=="translateX(-400px)")?
"translateX(400px)":"translateX(-400px)";
});


