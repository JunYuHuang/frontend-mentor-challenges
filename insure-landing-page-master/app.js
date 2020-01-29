// DOM ELEMENTS //
const navMenu = document.querySelector(".nav__menu");
const mobileNavMenuButton = document.querySelector(".nav__menu-button");
const mobileNavMenuButtonIcon = document.querySelector(
  ".nav__menu-button-icon"
);
const body = document.querySelector("body");

// EVENT LISTENERS //
mobileNavMenuButton.addEventListener("click", () => {
  // toggle nav menu items
  const navMenuActive = document.querySelector(".nav__menu--active");
  if (!navMenuActive) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }
  toggleMobileNav();
});

// auto-close menu if any of its links is clicked in mobile
navMenu.addEventListener("click", e => {
  let isInMobile = matchMedia("only screen and (max-width: 851px)").matches;
  console.log(isInMobile);
  if (isInMobile) {
    let isNavMenuItemLink = e.target.parentNode.classList.contains(
      "nav__menu__item"
    );
    if (isNavMenuItemLink) {
      toggleMobileNav();
      body.style.overflow = "auto";
    }
  }
});

// FUNCTIONS //
function toggleMobileNav() {
  mobileNavMenuButtonIcon.classList.toggle("nav__menu-button-icon--close");
  navMenu.classList.toggle("nav__menu--active");
}
