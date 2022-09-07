import React, { Component } from 'react';
import { gamingData } from '../GamingCardData/GamingCardData';
import './GamingCard.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


class GamingCard extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1253,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 868,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 605,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }
      ]
    };

  return (
    <div className='gamingCardRow'>
      <Slider {...settings}>
      {gamingData.map(item => (
        <div key={gamingData} className='gamingCard__card'>
        <div className='gamingCard__image'>
            <img
                src={item.image}
                alt={item.title}
            />
        </div>
        <div className='gamingCard__info'>
            <h4 className='gamingCard__title'>{item.title}</h4>
            <p className='gamingCard__desc'>{item.description}</p>
        </div>
      </div>
      ))}
      </Slider>
    </div>
  );
  }
};

export default GamingCard;