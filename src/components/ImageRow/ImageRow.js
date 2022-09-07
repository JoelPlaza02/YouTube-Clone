import React from 'react';
import './ImageRow.css';

const ImageRow = () => {
  return (
    <div className='imageRow'>     
        <img
          src='https://pbs.twimg.com/media/D1h-3SYWoAEcKXM.jpg:large'
          alt=''
          className='imageRow__image'
         />
    </div>
  );
};

export default ImageRow;