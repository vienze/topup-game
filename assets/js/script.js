// animation scroll navbar
window.addEventListener("scroll", () => {
  if (window.pageYOffset !== 0) {
    document.querySelector(".navbar").classList.add("shadow-sm");
  } else {
    document.querySelector(".navbar").classList.remove("shadow-sm");
  }
});

// change icon menu navbar
const hamburger = document.querySelector(".navbar-toggler #menu-icon");
const navbarNav = document.querySelector(".navbar-toggler");

hamburger.addEventListener("click", () => {
  if (navbarNav.classList.contains("collapsed")) {
    hamburger.classList.remove("bi-x");
    hamburger.classList.add("bi-list");
  } else {
    hamburger.classList.add("bi-x");
    hamburger.classList.remove("bi-list");
  }
});
