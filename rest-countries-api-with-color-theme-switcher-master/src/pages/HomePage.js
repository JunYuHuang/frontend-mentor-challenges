import React, { useState } from "react";
import { Link } from "react-router-dom";

const HomePage = ({ errorMessage, countries, setCurrentCountry }) => {
  // state
  const [countryNameFilterTerm, setCountryNameFilterTerm] = useState("");
  const [countryRegionFilterTerm, setCountryRegionFilterTerm] = useState("");

  // updater functions
  function updateCountryNameFilter(searchTerm) {
    // update state only if actually term actually changed to a different one
    if (countryNameFilterTerm !== searchTerm) {
      setCountryNameFilterTerm(searchTerm);
    }
  }

  function toggleDropdownMenu() {
    const chevronIcon = document.querySelector(".icon-container--dropdown");
    const dropdownList = document.querySelector(".input-group--dropdown__list");
    chevronIcon.classList.toggle("icon-container--dropdown--active");
    dropdownList.classList.toggle("input-group--dropdown__list--active");
  }

  function updateRegionFilter(region) {
    // update state only if actually term actually changed to a different one
    if (countryRegionFilterTerm !== region) {
      setCountryRegionFilterTerm(region);
    }

    // update visuals
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

  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const dropdownItemList = regions.map(region => {
    return (
      <li key={region} className="input-group--dropdown__list__item">
        <button
          className="button"
          onClick={() => {
            toggleDropdownMenu();
            updateRegionFilter(region);
          }}
        >
          {region}
        </button>
      </li>
    );
  });

  const countriesList = countries
    .filter(country => country.region.includes(countryRegionFilterTerm))
    .filter(country => {
      let countryName = country.name.toLowerCase();
      let searchTerm = countryNameFilterTerm.toLowerCase();
      return countryName.includes(searchTerm);
    })
    .map(country => {
      // use alpha3code property as "countryID" key
      return (
        <Link
          to={`/country/${country.alpha3Code}`}
          className="card"
          key={country.alpha3Code}
          onClick={() => setCurrentCountry(country)}
        >
          <div className="card__img-container">
            <img src={country.flag} alt={`The flag of ${country.name}`} />
          </div>
          <section className="card__text ellipsis">
            <h2 className="card__text__title ellipsis">
              {country.name ? country.name : errorMessage}
            </h2>
            <p className="card__text__fact">
              <strong>Population:</strong>{" "}
              {country.population
                ? country.population.toLocaleString("en-US")
                : errorMessage}
            </p>
            <p className="card__text__fact">
              <strong>Region:</strong>{" "}
              {country.region ? country.region : errorMessage}
            </p>
            <p className="card__text__fact">
              <strong>Capital:</strong>{" "}
              {country.capital ? country.capital : errorMessage}
            </p>
          </section>
        </Link>
      );
    });

  return (
    <section>
      <form className="form" onSubmit={e => e.preventDefault()}>
        <div className="input-group input-group--search">
          <input
            className="input input--search"
            id="input--search"
            type="text"
            placeholder="Search for a country..."
            onKeyUp={e => updateCountryNameFilter(e.target.value)}
          />
          {/* {console.log(countryNameFilterTerm)} */}
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
