import React from 'react';
import './MovieCardRow.css';


const MovieCardRow = ({ image, title, description, button, rating }) => {
  return (
    <div className='movieCardRow'>
        <div className='movieCardRow__image'>
            <img 
               src={image} 
               alt={title} 
            />
        </div>
        <div className='movieCardRow__info'>
            <p className='movieCardRow__title'>{title}</p>
            <p className='movieCardRow__desc'>{description}</p>
            <span className='movieCardRow__button'>{button}</span>
            <span className='movieCardRow__rating'>{rating}</span>
        </div>
    </div>
  );
};

export default MovieCardRow;