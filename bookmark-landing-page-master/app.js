// DOM ELEMENTS //
const logoImageText = document.querySelector(".logo-image__text");
const logoImageIconSymbol = document.querySelector(".logo-image__icon-symbol");
const logoImageIconCircle = document.querySelector(".logo-image__icon-circle");

const navMenu = document.querySelector(".nav-menu");
const navMenuButton = document.querySelector(".nav-menu-button");
const navMenuButtonIcon = document.querySelector(".nav-menu-button-icon");

const body = document.querySelector("body");

const tabControlPanel = document.querySelector(".tab__controls");
const tabControlButtons = document.querySelectorAll(".button--tab");
const tabDisplayItems = document.querySelectorAll(".tab__display__item");

const accordionButtons = document.querySelectorAll(".button--accordion");

const form = document.querySelector(".form");
const formGroupInputEmailContainer = document.querySelector(".form-group");
const formGroupInputEmail = document.querySelector(".form-group__input__email");
const formGroupErrorIcon = document.querySelector(".img-wrapper--icon-error");
const formGroupMessage = document.querySelector(".form-group__message");
const formGroupInputSubmit = document.querySelector(
  ".form-group__input__submit"
);

// EVENT LISTENERS //
navMenuButton.addEventListener("click", () => {
  const navMenuActive = document.querySelector(".nav-menu--active");
  if (!navMenuActive) {
    body.style.overflow = "hidden"; // prevents scrolling
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

// auto-closes menu if any of its links is clicked on
navMenu.addEventListener("click", e => {
  let isInMobile = matchMedia("only screen and (max-width: 851px)").matches;
  if (isInMobile) {
    let isNavMenuItemLink = e.target.parentNode.classList.contains(
      "nav-menu__item"
    );
    let isSocialLink = e.target.parentNode.classList.contains(
      "social-links__item"
    );
    let isSVGIcon = e.target.parentNode.classList.contains("icon");
    if (isNavMenuItemLink || isSocialLink || isSVGIcon) {
      toggleNavButton();
      toggleLogoColours();
      body.style.overflow = "auto";
    }
  }
});

tabControlPanel.addEventListener("click", e => {
  toggleTabButton(e);
  toggleTabDisplayItem(e);
});

form.addEventListener("submit", e => {
  e.preventDefault();
  validateEmailForm();
});

formGroupInputEmail.addEventListener("invalid", () => {
  validateEmailForm();
});

// FUNCTIONS //
function toggleNavButton() {
  let currentNavMenuButtonIcon = document.querySelector(
    ".nav-menu-button-icon"
  );
  // toggle menu icon between hamburger and x/close
  if (
    currentNavMenuButtonIcon.getAttribute("src") ===
    "./images/icon-hamburger.svg"
  ) {
    currentNavMenuButtonIcon.setAttribute("src", "./images/icon-close.svg");
  } else {
    currentNavMenuButtonIcon.setAttribute("src", "./images/icon-hamburger.svg");
  }
  navMenuButtonIcon.classList.toggle("nav-menu-button-icon--close");
  navMenu.classList.toggle("nav-menu--active"); // open/close nav menu
}

function toggleLogoColours() {
  logoImageText.classList.toggle("logo-image__text--light");
  logoImageIconSymbol.classList.toggle("logo-image__icon-symbol--dark");
  logoImageIconCircle.classList.toggle("logo-image__icon-circle--light");
}

function toggleAccordionItem(e) {
  let clickedElement = e.target;
  // open/close accordion
  clickedElement.parentNode.classList.toggle("accordion__item--active");
  // rotate arrow icon up or down
  clickedElement.lastChild.previousSibling.firstChild.nextSibling.classList.toggle(
    "accordion__item__icon__stroke--active"
  );
}

function toggleTabButton(e) {
  // allow only one tab button to be "active" at any time
  let clickedTabButton = e.target;
  let isTabButton = clickedTabButton.classList.contains("button--tab");

  if (isTabButton) {
    if (!clickedTabButton.classList.contains("button--tab--active")) {
      clickedTabButton.classList.toggle("button--tab--active");
    }

    tabControlButtons.forEach(tabControlButton => {
      if (tabControlButton !== clickedTabButton) {
        if (tabControlButton.classList.contains("button--tab--active")) {
          tabControlButton.classList.toggle("button--tab--active");
        }
      }
    });
  }
}

function toggleTabDisplayItem(e) {
  // get the target display item
  // allow only one tab display item to be "active" at any time
  let targetTabDisplayItemID = e.target.dataset.tabDisplayItemTarget;

  tabDisplayItems.forEach(tabDisplayItem => {
    if (tabDisplayItem.classList.contains(targetTabDisplayItemID)) {
      if (!tabDisplayItem.classList.contains("tab__display__item--active")) {
        tabDisplayItem.classList.toggle("tab__display__item--active");
      }
    } else {
      if (tabDisplayItem.classList.contains("tab__display__item--active")) {
        tabDisplayItem.classList.toggle("tab__display__item--active");
      }
    }
  });
}

function validateEmailForm() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (
    formGroupInputEmail.value === "" ||
    !emailRegex.test(formGroupInputEmail.value)
  ) {
    // input invalid
    // only add error message and visuals if they are not present
    if (!formGroupInputEmail.classList.contains("form-group__input--error")) {
      toggleEmailFormErrorMessage();
    }
    // shake email input
    formGroupInputEmailContainer.classList.toggle("shake-horizontal");
    setTimeout(() => {
      formGroupInputEmailContainer.classList.toggle("shake-horizontal");
    }, 500);
  } else {
    // input valid
    // remove error message and visuals if they are present
    if (formGroupInputEmail.classList.contains("form-group__input--error")) {
      toggleEmailFormErrorMessage();
    }
    // show user "success" visuals
    formGroupInputEmail.disabled = true;
    formGroupInputSubmit.value = "Joined!";
    formGroupInputSubmit.disabled = true;
  }
}

function toggleEmailFormErrorMessage() {
  formGroupInputEmail.classList.toggle("form-group__input--error");
  formGroupErrorIcon.classList.toggle("img-wrapper--icon-error--active");
  formGroupMessage.classList.toggle("form-group__message--active");
}
