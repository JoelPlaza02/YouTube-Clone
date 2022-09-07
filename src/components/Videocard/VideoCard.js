import React from 'react';
import Avatar from '@mui/material/Avatar';
import './VideoCard.css';

const Videocard = ({ image, title, channel, views, timestamp, channelImage }) => {
  return (
        <div className='videoCard'>
            <img 
              className='videoCard__thumbnail'
              src={image} 
              alt="" />
            <div className='videoCard__info'>
                <Avatar 
                  className='videoCard__avatar'
                  alt={channel}
                  src={channelImage} 
                />
                <h4>{title}</h4>
            </div>
            <div className='videoCard__text'>
                <p>{channel}</p>
                <p>{views} • {timestamp}</p>
            </div>
        </div>
  );
};

export default Videocard;