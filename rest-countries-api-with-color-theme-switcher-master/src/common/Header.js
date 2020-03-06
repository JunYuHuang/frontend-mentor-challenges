import React from "react";

function Header() {
  function toggleDarkMode() {
    const darkModeButtonIcon = document.querySelector(".icon-container--dark");
    darkModeButtonIcon.classList.toggle("icon-container--dark--active");
  }

  return (
    <header className="navbar">
      <nav className="nav">
        <h1 className="app-logo">Where in the world?</h1>
        <button className="button button--dark-mode" onClick={toggleDarkMode}>
          <div className="icon-container">
            <ion-icon name="moon-outline"></ion-icon>
          </div>
          <div className="icon-container icon-container--dark">
            <ion-icon name="moon"></ion-icon>
          </div>
          Dark Mode
        </button>
      </nav>
    </header>
  );
}

export default Header;
