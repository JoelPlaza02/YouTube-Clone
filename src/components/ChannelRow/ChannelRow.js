import React from 'react';
import './ChannelRow.css';
import VerifiedIcon from '@mui/icons-material/CheckCircle';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const ChannelRow = ({ image, channel, subscriptions, videos, verified, description }) => {
  return (
    <div className='channelRow'>
        <div className='channelRow__image'>
            <img alt={channel} src={image} />
        </div>
        <div className='channelRow__info'>
            <h2>{channel} {verified && <VerifiedIcon className='channelRow__verified' />}</h2>
            <p>{subscriptions} subscribers • {videos} videos</p>
            <p>{description}</p>
        </div>
        <div className='channelRow__button'>
            <button>SUBSCRIBED</button>
            <NotificationsActiveIcon className="channelRow__bell" />
        </div>
    </div>
  )
};;

export default ChannelRow;