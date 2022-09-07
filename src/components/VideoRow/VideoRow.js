import React from 'react';
import VerifiedIcon from '@mui/icons-material/CheckCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './VideoRow.css';


const VideoRow = ({ image, title, views, timestamp, channelImage, channel, verified, description }) => {
  
  return (
     <div className='videoRow'>
         <img 
            className='videoRow__thumbnail'
            src={image}
            alt=""  />
        <div className='videoRow__info'>
         <div className="videoRow__title">
            <h4>{title}</h4>
            <MoreVertIcon className='videoRow__button' />
            </div>
            <p className='videoRow__views__timestamp'>{views} views • {timestamp}</p>
            <div className='videoRow__headline'>
                <img className="videoRow__image" src={channelImage} alt={channel} />
                <p>{channel} {verified && <VerifiedIcon className='videoRow__verified' />}</p>
            </div>
            <p className='videoRow__description'>{description}</p>
        </div>
     </div>
  );
};

export default VideoRow;