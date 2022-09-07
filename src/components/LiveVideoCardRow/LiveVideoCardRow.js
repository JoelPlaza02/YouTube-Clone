import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react';
import './LiveVideoCardRow.css';


const LiveVideoCardRow = ({ item }) => {
  return (
    <div className='liveVideoCardRow'>
        <div className='liveVideoCardRow__card'>
            <div className='liveVideoCardRow__image'>
                <img
                    src={item.image}
                    alt={item.channel}
                /> 
            </div>
            <div className='liveVideoCardRow__info'>
              <div className='liveVideoCardRow__titleRow'>
                <p className='liveVideoCardRow__title'>{item.title}</p>
                <MoreVertIcon className='liveVideoCardRow__options' />
              </div>
                <p className='liveVideoCardRow__channel'>{item.channel}</p>
                <p className='liveVideoCardRow__viewsTimestamp'>{item.views_timestamp}</p>
            </div>
        </div>
    </div>
  );
};


export default LiveVideoCardRow;