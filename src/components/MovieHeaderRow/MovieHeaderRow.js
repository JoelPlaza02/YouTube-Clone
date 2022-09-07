import React from 'react';
import './MovieHeaderRow.css';

const MovieHeaderRow = ({ image, title, description }) => {
  return (
    <div className='movieHeaderRow'>
        <div className='movieHeaderRow__image'>
            <img 
              src={image} 
              alt={title} 
            />
        </div>
        <div className='movieHeaderRow__text'>
            <h4 className='movieHeaderRow__title'>{title}</h4>
            <p className='movieHeaderRow__desc'>{description}</p>
        </div>
    </div>
  );
};

export default MovieHeaderRow;