import React from 'react';
import './GamingHeader.css';


const GamingHeader = ({ image, channel, subscriptions, button }) => {
  return (
    <div className='gamingHeader'>
      <div className='gamingHeader__left'>
       <img 
         src={image} 
         alt={channel} 
         className='gamingHeader__image'
       />
       <div className='gamingHeader__info'>
          <h4 className='gamingHeader__channel'>{channel}</h4>
          <p className='gamingHeader__subs'>{subscriptions}M subscribers</p>
       </div>
      </div>
      <div className='gamingHeader__right'>
          <button className='gamingHeader__button'>{button}</button>
      </div>
    </div>
  );
};

export default GamingHeader;