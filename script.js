const exploreIcon = document.getElementsByClassName("fa-magnifying-glass")[0];

exploreIcon.addEventListener("mouseover", () => {
  exploreIcon.classList.add("fa-flip");
});
exploreIcon.addEventListener("mouseout", () => {
  exploreIcon.classList.remove("fa-flip");
});
