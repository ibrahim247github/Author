const menuToggler = document.querySelector(".menu-toggler");
const menuTogglerIcon = document.querySelector(".menu-toggler__icon");
const menu = document.querySelector(".menu");

menuToggler.addEventListener("click", () => {
  menuTogglerIcon.classList.toggle("is-open");
  menu.classList.toggle("is-open");

  if (menu.classList.contains("is-open")) {
    document.body.classList.add("scroll-disabler");
  } else {
    document.body.classList.remove("scroll-disabler");
  }
});
