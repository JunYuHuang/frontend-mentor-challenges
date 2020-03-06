import React from "react";

const HomePage = () => {
  function toggleDropdownMenu() {
    const chevronIcon = document.querySelector(".icon-container--dropdown");
    const dropdownList = document.querySelector(".input-group--dropdown__list");
    chevronIcon.classList.toggle("icon-container--dropdown--active");
    dropdownList.classList.toggle("input-group--dropdown__list--active");
  }

  function updateSelectedRegion(region) {
    const dropdownButtonText = document.querySelector(
      ".button--dropdown__text"
    );
    if (!dropdownButtonText.classList.contains("capitalizedText")) {
      dropdownButtonText.classList.add("capitalizedText");
    }

    if (dropdownButtonText.textContent !== region) {
      dropdownButtonText.textContent = region;
    }
  }

  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const dropdownItemList = regions.map(region => {
    return (
      <li className="input-group--dropdown__list__item">
        <button
          className="button"
          value={region}
          onClick={() => {
            toggleDropdownMenu();
            updateSelectedRegion(region);
          }}
        >
          {region}
        </button>
      </li>
    );
  });

  const countries = [
    {
      name: "Germany",
      population: "81,770,900",
      region: "Europe",
      capital: "Berlin",
      flag: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg"
    },
    {
      name: "United States of America",
      population: "323,947,000",
      region: "Americas",
      capital: "Washington, D.C.",
      flag:
        "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png"
    }
  ];
  const countriesList = countries.map(country => {
    return (
      <div className="card">
        <div className="card__img-container">
          <img src={country.flag} alt={`The flag of ${country.name}`} />
        </div>
        <section className="card__text">
          <h2 className="card__text__title">{country.name}</h2>
          <p className="card__text__fact">
            <strong>Population:</strong> {country.population}
          </p>
          <p className="card__text__fact">
            <strong>Region:</strong> {country.region}
          </p>
          <p className="card__text__fact">
            <strong>Capital:</strong> {country.capital}
          </p>
        </section>
      </div>
    );
  });

  function preventSubmit(e) {
    e.preventDefault();
  }

  return (
    <section>
      <form className="form" onSubmit={e => preventSubmit(e)}>
        <div className="input-group input-group--search">
          <input
            className="input input--search"
            id="input--search"
            type="text"
            placeholder="Search for a country..."
          />
          <label className="label" htmlFor="input--search">
            Country Search
          </label>
          <div className="icon-container icon-container--search">
            <ion-icon name="search-sharp"></ion-icon>
          </div>
        </div>
        <div className="input-group input-group--dropdown">
          <button
            onClick={toggleDropdownMenu}
            className="button button--dropdown"
          >
            <div className="button--dropdown__text">Filter by Region</div>
            <div className="icon-container icon-container--dropdown">
              <ion-icon name="chevron-down-outline"></ion-icon>
            </div>
          </button>
          <ul className="input-group--dropdown__list">{dropdownItemList}</ul>
        </div>
      </form>
      <div className="card-grid-container">{countriesList}</div>
    </section>
  );
};

export default HomePage;
