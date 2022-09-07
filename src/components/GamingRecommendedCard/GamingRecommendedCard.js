import React from 'react';
import VerifiedIcon from '@mui/icons-material/CheckCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './GamingRecommendedCard.css';

const GamingRecommendedCard = ({ image, channel, title, verified, views, timestamp }) => {
  return (
    <div className='gamingRecommendedCard'>
        <div className='gamingRecommendedCard__image'>
            <img 
              src={image}
              alt={channel}
            />
        </div>
        <div className='gamingRecommendedCard__info'>
          <div className='gamingRecommendedCard__titleRow'>
               <p className='gamingRecommendedCard__title'>{title}</p>
               <MoreVertIcon className='gamingRecommendedCard__options' />
          </div>
            <p className='gamingRecommendedCard__channel'>
               {channel} { verified && <VerifiedIcon className='gamingRecommendedCard__verified' /> }
            </p>
            <p className='gamingRecommendedCard__views'>{views}K views • {timestamp}</p>
        </div>
    </div>
  );
};

export default GamingRecommendedCard;