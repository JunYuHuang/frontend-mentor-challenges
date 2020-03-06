import React from "react";
import { Link } from "react-router-dom";

const DetailPage = () => {
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
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Belgium_%28civil%29.svg/1280px-Flag_of_Belgium_%28civil%29.svg.png"
            alt="The Flag of Belgium"
          />
        </div>
        <section className="detailDisplay__text">
          <h2 className="detailDisplay__text__title">Belgium</h2>
          <div className="detailDisplay__text__group detailDisplay__text__group--1">
            <p className="detailDisplay__text__fact">
              <strong>Native Name:&nbsp;</strong>Belgie
            </p>
            <p className="detailDisplay__text__fact">
              <strong>Population:&nbsp;</strong>11,319,511
            </p>
            <p className="detailDisplay__text__fact">
              <strong>Region:&nbsp;</strong>Europe
            </p>
            <p className="detailDisplay__text__fact">
              <strong>Sub Region:&nbsp;</strong>Western Europe
            </p>
            <p className="detailDisplay__text__fact">
              <strong>Capital:&nbsp;</strong>Brussels
            </p>
          </div>
          <div className="detailDisplay__text__group detailDisplay__text__group--2">
            <p className="detailDisplay__text__fact">
              <strong>Top Level Domain:&nbsp;</strong>.be
            </p>
            <p className="detailDisplay__text__fact">
              <strong>Currencies:&nbsp;</strong>Euro
            </p>
            <p className="detailDisplay__text__fact">
              <strong>Language:&nbsp;</strong>Dutch, French, German
            </p>
          </div>
          <div className="detailDisplay__text__group detailDisplay__text__group--borders">
            <h3 className="detailDisplay__text__title detailDisplay__text__title--border">
              Border Countries:
            </h3>
            <div className="button-container button-container--border">
              <button className="button button--border">France</button>
              <button className="button button--border">Germany</button>
              <button className="button button--border">Netherlands</button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default DetailPage;
