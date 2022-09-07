import React, { Component } from 'react';
import { liveRecentCardData } from '../LiveRecentCardData/LiveRecentCardData';
import './LiveRecentCardRow.css';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


class LiveRecentCardRow extends Component {
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
      <div className='liveRecentCardRow'>
        <Slider {...settings}>
          {liveRecentCardData.map((item, index) => (
              <div key={index} className='liveRecentCardRow__card'>
                  <div className='liveRecentCardRow__image'>
                      <img
                          src={item.image}
                          alt={item.title}
                      />
                  </div>
                  <div className='liveRecentCardRow__info'>
                      <p className='liveRecentCardRow__title'>{item.title}</p>
                      <p className='liveRecentCardRow__channel'>{item.channel}</p>
                      <p className='liveRecentCardRow__views'>{item.views_timestamp}</p>
                  </div>
              </div>
          ))}
        </Slider>
      </div>
    );
    }
};

export default LiveRecentCardRow;