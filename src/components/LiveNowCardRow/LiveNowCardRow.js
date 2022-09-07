import React, { Component } from 'react';
import { liveNowCardData } from '../LiveNowCardData/LiveNowCardData';
import './LiveNowCardRow.css';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


class LiveNowCardRow extends Component {
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
      <div className='liveNowCardRow'>
        <Slider {...settings}>
          {liveNowCardData.map((item, index) => (
            <div key={index} className='liveNowCardRow__card'>
              <div className='liveNowCardRow__image'>
                  <img
                      src={item.image}
                      alt={item.title}
                  />
              </div>
              <div className='liveNowCardRow__info'>
                  <p className='liveNowCardRow__title'>{item.title}</p>
                  <p className='liveNowCardRow__channel'>{item.channel}</p>
                  <p className='liveNowCardRow__views'>{item.views}</p>
              </div>
          </div>
          ))}
        </Slider>
      </div>
    );
  }
};

export default LiveNowCardRow;
