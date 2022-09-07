import React, { Component } from 'react'
import { ShortsData } from '../ShortsCardData/ShortsCardData';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './GamingShorts.css';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class GamingShorts extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1275,
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
      <div className='gamingShorts'>
        <Slider {...settings}>
          {ShortsData.map(item => (
             <div key={ShortsData} className='gamingShorts__card'>
                <div className='gamingShorts__image'>
                    <img
                       src={item.image}
                       alt={item.title}
                    />
                </div>
                <div className='gamingShorts__info'>
                  <div className='gamingShorts__titleRow'>
                    <p className='gamingShorts__title'>{item.title}</p>
                    <MoreVertIcon />
                  </div>
                    <p className='gamingShorts__views'>{item.views}</p>
                </div>
             </div>
          ))}
        </Slider>
      </div>
    );
  }
};

export default GamingShorts;