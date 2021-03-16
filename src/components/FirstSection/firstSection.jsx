import React from 'react';
import { ReactComponent as IphoneXIcon } from '../../assets/svgs/phoneIcon.svg';
import { Button } from '../Button/button';
import './firstSection.css';

export default function firstSection() {
  return (
    <div className="section ">
      <div className="section__left">
        <h1 className="section__left__title">
          Chat with <span className="section__left__title sub__text">friends.</span>
        </h1>
        <h1 className="section__left__title">Watch funny content.</h1>
        <p className="section__left__text">
          Forward-thinking businesses use Timekit to imagine, design and manage the perfect
          scheduling flows to imagine, design and manage.
        </p>
        <input type="text" className="section__left__input" placeholder="(123) 4567-8901" />
        <Button
          bgColor="#335EEA"
          textColor="#FFFFFF"
          type="button"
          theme="primary"
          className="section__left__button"
        >
          Text link{' '}
        </Button>
        {/* <button className="section__left__button">Text link</button> */}
      </div>
      <div>
        <IphoneXIcon />
      </div>
    </div>
  );
}
