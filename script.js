const searchInput = document.querySelector(".search-input");
const navSearch = document.querySelector(".nav-search");

searchInput.addEventListener("focus", () => {
  navSearch.classList.add("outlined");
});

searchInput.addEventListener("blur", () => {
  navSearch.classList.remove("outlined");
});
