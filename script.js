

const hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0];
const navLinksContainer = document.getElementsByClassName(
  "nav-links-container"
)[0];
hamburgerMenu.addEventListener("click", () => {
 return navLinksContainer.style.transform=(navLinksContainer.style.transform=="translateX(-100%)")?"translateX(100%)":"translateX(-100%)"

})


