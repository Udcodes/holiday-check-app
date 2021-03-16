import React from 'react';
import { Button } from '../Button/button';
import './header.css';

export default function header() {
  return (
    <div className="header">
      <h1>LandKit.</h1>
      <ul className="header header__list">
        <li className="header header__list__item">Landings</li>
        <li className="header header__list__item">Pages</li>
        <li className="header header__list__item">Account</li>
        <li className="header header__list__item">Documentation</li>
      </ul>
      <div className="header right__column__container">
        <span className="header right__column__text">Documentation</span>
        <Button
          bgColor="#335EEA"
          textColor="#FFFFFF"
          type="button"
          theme="primary"
          className="header__right__button"
        >
          Buy now
        </Button>
        {/* <button type="button">Buy now</button> */}
      </div>
    </div>
  );
}
