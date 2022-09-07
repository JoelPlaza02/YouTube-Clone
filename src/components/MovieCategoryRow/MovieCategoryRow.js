import React from 'react';
import './MovieCategoryRow.css';

const MovieCategoryRow = () => {
  return (
    <div className='movieCategoryRow'>
       <div className='movieCategoryRow__options'>
          <p className='movieCategory__titleSelected'>BROWSE</p>
          <p className='movieCategory__title'>FREE WITH ADS</p>
          <p className='movieCategory__title'>PURCHASED</p>
       </div>
    </div>
  );
};

export default MovieCategoryRow;