// DOM ELEMENTS //
const logoImageText = document.querySelector(".logo-image__text");
const logoImageIconSymbol = document.querySelector(".logo-image__icon-symbol");
const logoImageIconCircle = document.querySelector(".logo-image__icon-circle");
const navMenu = document.querySelector(".nav-menu");
const navMenuButton = document.querySelector(".nav-menu-button");
const navMenuButtonIcon = document.querySelector(".nav-menu-button-icon");
const body = document.querySelector("body");
const accordionButtons = document.querySelectorAll(".button--accordion");

// EVENT LISTENERS //
navMenuButton.addEventListener("click", () => {
  // toggle nav menu items
  const navMenuActive = document.querySelector(".nav-menu--active");
  if (!navMenuActive) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }
  toggleNavButton();
  toggleLogoColours();
});

accordionButtons.forEach(accordionButton => {
  accordionButton.addEventListener("click", e => {
    e.stopPropagation();
    toggleAccordionItem(e);
  });
});

// auto-close menu if any of its links is clicked in
navMenu.addEventListener("click", e => {
  let isInMobile = matchMedia("only screen and (max-width: 851px)").matches;
  console.log(isInMobile);
  if (isInMobile) {
    let isNavMenuItemLink = e.target.parentNode.classList.contains(
      "nav-menu__item"
    );
    let isSocialLink = e.target.parentNode.classList.contains(
      "social-links__item"
    );
    if (isNavMenuItemLink || isSocialLink) {
      toggleNavButton();
      toggleLogoColours();
      body.style.overflow = "auto";
    }
  }
});

// FUNCTIONS //
function toggleNavButton() {
  let currentNavMenuButtonIcon = document.querySelector(
    ".nav-menu-button-icon"
  );
  if (
    currentNavMenuButtonIcon.getAttribute("src") ===
    "./images/icon-hamburger.svg"
  ) {
    currentNavMenuButtonIcon.setAttribute("src", "./images/icon-close.svg");
  } else {
    currentNavMenuButtonIcon.setAttribute("src", "./images/icon-hamburger.svg");
  }
  navMenuButtonIcon.classList.toggle("nav-menu-button-icon--close");
  navMenu.classList.toggle("nav-menu--active");
}

function toggleLogoColours() {
  logoImageText.classList.toggle("logo-image__text--light");
  logoImageIconSymbol.classList.toggle("logo-image__icon-symbol--dark");
  logoImageIconCircle.classList.toggle("logo-image__icon-circle--light");
}

function toggleAccordionItem(e) {
  let clickedElement = e.target;
  clickedElement.parentNode.classList.toggle("accordion__item--active");
  clickedElement.firstChild.nextSibling.firstChild.nextSibling.classList.toggle(
    "accordion__item__icon__stroke--active"
  );
  console.log(clickedElement.firstChild.nextSibling.firstChild.nextSibling);
}
