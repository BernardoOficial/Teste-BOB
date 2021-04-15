// MENU MOBILE
const body = document.body; 
const iconMenuOpen = document.querySelector("[data-icon]");
const overlay = document.querySelector("[data-overlay]");
const menuMobile = document.querySelector("[data-menu-mobile]");
const iconMenuClose = document.querySelector("[data-icon-close]");

const toggleIcon = () => {
  iconMenuOpen.classList.add("header__icon-toggle--ativo");
  overlay.classList.add("header__overlay--ativo");
  menuMobile.classList.add("header__menu-mobile--ativo");

  body.setAttribute('data-noscroll', '');
};

const hideOverlay = (evento) => {
  evento.stopPropagation();
  iconMenuOpen.classList.remove("header__icon-toggle--ativo");
  overlay.classList.remove("header__overlay--ativo");
  menuMobile.classList.remove("header__menu-mobile--ativo");

  body.removeAttribute("data-noscroll");
};

menuMobile.addEventListener("click", (evento) => evento.stopPropagation());

// Abrir Menu
iconMenuOpen.addEventListener("click", toggleIcon);

// Fechar Menu
overlay.addEventListener("click", hideOverlay);
iconMenuClose.addEventListener("click", hideOverlay);

console.log("Apareci");

//////////////////////////////////////////////

// LAZYLOAD
// window.onload = verificarScroll;

// function verificarScroll() {
//   window.addEventListener("scroll", aparecerImages);
// }

// function aparecerImages() {
//   const containersElements = document.querySelectorAll(".main__show-me");

//   containersElements.forEach((element) => {
//     if (element.getBoundingClientRect().top < window.innerHeight - 300) {
//       element.classList.add("main__show-me--ativo");
//     } else if (element.getBoundingClientRect().top > window.innerHeight - 150) {
//       element.classList.remove("main__show-me--ativo");
//     }
//   });
// }

//////////////////////////////////////////////

// SWITCH THEME
// const HTML = document.querySelector("html");
// const btnTheme = document.querySelector("[data-btn-theme]");
// const iconBtnTheme = btnTheme.firstElementChild;

// const classNamesIcons = {
//   sun: "fas fa-sun",
//   moon: "fas fa-moon",
// };

// const getCurrentTheme = () => HTML.getAttribute("data-theme");

// const switchTheme = () => {
//   const currentTheme = getCurrentTheme();
//   currentTheme === "light"
//     ? (HTML.setAttribute("data-theme", "dark"),
//       (iconBtnTheme.classList.value = classNamesIcons.sun))
//     : (HTML.setAttribute("data-theme", "light"),
//       (iconBtnTheme.classList.value = classNamesIcons.moon));
// };

// btnTheme.addEventListener("click", switchTheme);
