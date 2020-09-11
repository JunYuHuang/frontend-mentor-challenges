import React from "react";
import { Link } from "react-router-dom";

const DetailPage = ({ errorMessage, currentCountry, setCurrentCountry }) => {
  function formatLanguages(array) {
    // return array.name.join(", ");
    let formattedString = "";
    // array.forEach(arrayItem => {
    //   formattedString += `${arrayItem.name}, `;
    // });
    let lastArrayElementIndex = array.length - 1;
    for (let i = 0; i < array.length; i++) {
      if (array[lastArrayElementIndex]) {
        formattedString += `${array[i].name}`;
      } else {
        formattedString += `${array[i].name}, `;
      }
    }
    return formattedString;
    //
    //
    //
    // for (let i = 0; i < array.length; i++) {
    //   let term = i.name;
    //   let delimiter = ", ";
    //   if (array.length > 2 || i === array.length - 1) {
    //     delimiter = "";
    //   } else {
    //     delimiter = ", ";
    //   }
    //   formattedString += term + delimiter;
    // }
  }

  const formattedBorderCountries = currentCountry.borders.map(
    (borderCountry) => {
      // console.log(borderCountry);

      return (
        <Link
          to={`/country/${borderCountry}`}
          key={borderCountry}
          className="button button--border"
          onClick={() => console.log("gay")}
        >
          {borderCountry}
        </Link>
      );
    }
  );

  return (
    <section className="page page--detail">
      <Link to="/" className="button button--back">
        <div className="icon-container icon-container--back">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className="button__text">Back</div>
      </Link>
      <div className="detailDisplay">
        <div className="detailDisplay__img-container">
          <img
            src={currentCountry.flag}
            alt={`The flag of ${currentCountry.name}`}
          />
        </div>
        <section className="detailDisplay__text">
          <h2 className="detailDisplay__text__title">
            {currentCountry.name ? currentCountry.name : errorMessage}
          </h2>
          <div className="detailDisplay__text__group detailDisplay__text__group--1">
            <p className="detailDisplay__text__fact">
              <strong>Native Name:&nbsp;</strong>
              {currentCountry.nativeName
                ? currentCountry.nativeName
                : errorMessage}
            </p>
            <p className="detailDisplay__text__fact">
              <strong>Population:&nbsp;</strong>
              {currentCountry.population
                ? currentCountry.population.toLocaleString("en-US")
                : errorMessage}
            </p>
            <p className="detailDisplay__text__fact">
              <strong>Region:&nbsp;</strong>
              {currentCountry.region ? currentCountry.region : errorMessage}
            </p>
            <p className="detailDisplay__text__fact">
              <strong>Sub Region:&nbsp;</strong>
              {currentCountry.subregion
                ? currentCountry.subregion
                : errorMessage}
            </p>
            <p className="detailDisplay__text__fact">
              <strong>Capital:&nbsp;</strong>
              {currentCountry.capital ? currentCountry.capital : errorMessage}
            </p>
          </div>
          <div className="detailDisplay__text__group detailDisplay__text__group--2">
            <p className="detailDisplay__text__fact">
              <strong>Top Level Domain:&nbsp;</strong>
              {currentCountry.topLevelDomain[0]
                ? currentCountry.topLevelDomain[0]
                : errorMessage}
            </p>
            <p className="detailDisplay__text__fact">
              <strong>Currencies:&nbsp;</strong>
              {currentCountry.currencies[0].name
                ? currentCountry.currencies[0].name
                : errorMessage}
            </p>
            <p className="detailDisplay__text__fact">
              <strong>Languages:&nbsp;</strong>
              {currentCountry.languages
                ? formatLanguages(currentCountry.languages)
                : errorMessage}
            </p>
          </div>
          <div className="detailDisplay__text__group detailDisplay__text__group--borders">
            <h3 className="detailDisplay__text__title detailDisplay__text__title--border">
              Border Countries:
            </h3>
            <div className="button-container button-container--border">
              {currentCountry.borders.length > 0
                ? formattedBorderCountries
                : errorMessage}
              {/* <button className="button button--border">France</button>
              <button className="button button--border">Germany</button>
              <button className="button button--border">Netherlands</button> */}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default DetailPage;
