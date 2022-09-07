import React from 'react';
import { Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/CheckCircle';
import OptionsIcon from '@mui/icons-material/MoreVert';
import './SportsCardRecommended.css';


const SportsCardRecommended = 
({ image, 
   title, 
   channelImage, 
   channel,
   verified, 
   views, 
   timestamp }) => {
  return (
    <div className='sportsCardRecommended'>
        <img
            src={image}
            alt={title}
            className='sportsCardRecommended__image'
        />
        <div className='sportsCardRecommended__info'>
            <Avatar
                src={channelImage}
                alt={channel}
                className='sportsCardRecommended__channelImage'
            />
            <p className='sportsCardRecommended__title'>{title}</p>
            <OptionsIcon />
        </div>
        <div className='sportsCardRecommended__text'>
            <p className='sportsCardRecommended__channel'>{channel} {verified && <VerifiedIcon className='sportsCardRecommended__icon' />}</p>
            <p className='sportsCardRecommended__views'>{views} views • {timestamp} ago</p>
        </div>
    </div>
  );
};

export default SportsCardRecommended;