import React from "react";

function Main() {
  return (
    <main className="main-wrapper">
      <div className="input-group-container">
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
        </div>
        <div className="input-group input-group--dropdown">
          <button className="button button--dropdown">Filter by Region</button>
          <ul className="input-group--dropdown__list">
            <li className="input-group--dropdown__list__item">
              <input
                type="radio"
                className="input input--radio"
                id="input--radio--africa"
                name="country-filter"
              />
              <label htmlFor="input--radio--africa">Africa</label>
            </li>
            <li className="input-group--dropdown__list__item">
              <input
                type="radio"
                className="input input--radio"
                id="input--radio--america"
                name="country-filter"
              />
              <label htmlFor="input--radio--america">America</label>
            </li>
            <li className="input-group--dropdown__list__item">
              <input
                type="radio"
                className="input input--radio"
                id="input--radio--asia"
                name="country-filter"
              />
              <label htmlFor="input--radio--asia">Asia</label>
            </li>
            <li className="input-group--dropdown__list__item">
              <input
                type="radio"
                className="input input--radio"
                id="input--radio--europe"
                name="country-filter"
              />
              <label htmlFor="input--radio--europe">Europe</label>
            </li>
            <li className="input-group--dropdown__list__item">
              <input
                type="radio"
                className="input input--radio"
                id="input--radio--oceania"
                name="country-filter"
              />
              <label htmlFor="input--radio--oceania">Oceania</label>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Main;
