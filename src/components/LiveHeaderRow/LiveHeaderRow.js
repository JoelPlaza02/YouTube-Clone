import React from 'react';
import './LiveHeaderRow.css';


const LiveHeaderRow = ({ image, channel, subscriptions, button, category, categoryTwo }) => {
  return (
    <div className='liveHeaderRow'>
      <div className='liveHeaderRow__top'>
        <div className='liveHeaderRow__left'>
            <img 
                src={image}
                alt={channel}
                className='liveHeaderRow__image'
            />
            <div className='liveHeaderRow__info'>
                <h4>{channel}</h4>
                <p>{subscriptions}M subscribers</p>
            </div>
        </div>
        <div className='liveHeaderRow__right'>
            <button className='liveHeaderRow__button'>{button}</button>
        </div>
      </div>
        <div className='liveHeaderRow__category'>
            <p className='liveHeaderRow__selected'>{category}</p>
            <p>{categoryTwo}</p>
        </div>
    </div>
  );
};

export default LiveHeaderRow;