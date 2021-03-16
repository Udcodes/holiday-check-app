import React from 'react';
import ImageFour from '../../assets/svgs/imageFour.svg';
import ImageOne from '../../assets/svgs/imageOne.svg';
import ImageThree from '../../assets/svgs/imageThree.svg';
import ImageTwo from '../../assets/svgs/imageTwo.svg';
import { Button } from '../Button/button';
import './secondSection.css';

export default function secondSection() {
  return (
    <div className="section ">
      <div>
        <ImageOne />
        <img src="" alt="" srcset="" className="imageOne" />

        <div>
          {' '}
          <img src={ImageOne} alt="" srcset="" className="imageOne" />
          <img src={ImageTwo} alt="" srcset="" />
        </div>
        <div>
          {' '}
          <img src={ImageThree} alt="" srcset="" />
          <img src={ImageFour} alt="" srcset="" />
        </div>

        {/* <ImageTwo />
        <ImageThree />
        <ImageFour /> */}
      </div>
      <div className="section__left">
        <h1 className="section__left__title">Keep in touch while traveling the world.</h1>
        {/* <h1 className="section__left__title">Watch funny content.</h1> */}
        <p className="section__left__text">
          Forward-thinking businesses use Timekit to imagine, design and manage the perfect
          scheduling flows to imagine, design and manage.
        </p>
        <Button
          bgColor="#335EEA"
          textColor="#FFFFFF"
          type="button"
          theme="primary"
          className="section__button"
        >
          View more{' '}
        </Button>
        {/* <button className="section__left__button">Text link</button> */}
      </div>
    </div>
  );
}
