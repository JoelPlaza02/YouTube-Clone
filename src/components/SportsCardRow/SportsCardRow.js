import React from 'react';
import VerifiedIcon from '@mui/icons-material/CheckCircle';
import OptionsIcon from '@mui/icons-material/MoreVert';
import './SportsCardRow.css';


const SportsCardRow = ({ image, channelImage, title, channel, verified, views, timestamp}) => {
  return (
    <div className='sportsCardRow'>
        <img
            src={image}
            alt={title}
            className='sportsCardRow__image'
        />
        <div className='sportsCardRow__info'>
            <img
                src={channelImage}
                alt={channel}
                className='sportsCardRow__channelImage'
            />
            <p className='sportsCardRow__title'>{title}</p>
            <OptionsIcon />
        </div>
        <div className='sportsCardRow__text'>
            <p className='sportsCardRow__channel'>{channel} {verified && <VerifiedIcon className='sportsCardRow__icon' />}</p>
            <p className='sportsCardRow__views'>{views} views • Streamed {timestamp} ago</p>
        </div>
    </div>
  );
};

export default SportsCardRow;