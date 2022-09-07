import React from 'react';
import './SportsHeaderRow.css';


const SportsHeaderRow = ({ image, channel, subscribers, button }) => {
  return (
    <div className='sportsHeaderRow'>
        <div className='sportsHeaderRow__left'>
            <img
                src={image}
                alt={channel}
                className='sportsHeaderRow__image'
            />
            <div className='sportsHeaderRow__info'>
                <h4>{channel}</h4>
                <p>{subscribers}M subscribers</p>
            </div>
        </div>
        <div className='sportsHeaderRow__right'>
            <button className='sportsHeaderRow__button'>{button}</button>
        </div>
    </div>
  );
};

export default SportsHeaderRow;