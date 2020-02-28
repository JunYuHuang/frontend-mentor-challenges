import React from "react";

function Header() {
  return (
    <header className="navbar">
      <nav className="nav">
        <h1 className="app-logo">Where in the world?</h1>
        <button className="button button--dark-mode">
          <i class="far moon"></i>&nbsp;Dark Mode
        </button>
      </nav>
    </header>
  );
}

export default Header;
