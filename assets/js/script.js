window.addEventListener("scroll", () => {
  if (window.pageYOffset !== 0) {
    document.querySelector(".navbar").classList.add("shadow-sm");
  } else {
    document.querySelector(".navbar").classList.remove("shadow-sm");
  }
});
