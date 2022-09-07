import React, { useState } from 'react';
import LiveHeaderRow from '../LiveHeaderRow/LiveHeaderRow';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import './LivePage.css';
import LiveVideoCardRow from '../LiveVideoCardRow/LiveVideoCardRow';
import LiveNowCardRow from '../LiveNowCardRow/LiveNowCardRow';
import LiveRecentCardRow from '../LiveRecentCardRow/LiveRecentCardRow';


const LivePage = () => {
  const [visible, setVisible] = useState(2);

  const showMoreItem = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  return (
    <div className='livePage'>
        <LiveHeaderRow
            image='https://yt3.ggpht.com/8D6JlsnvwDZFMdcbjqVji82kggP3aXXbO-yBD0RFrKlp4G1zNt9wcqcVTSPnAI8GuUAbDYQwsg=s176-c-k-c0x00ffffff-no-rj'
            channel='Live'
            subscriptions='15.3'
            button='SUBSCRIBE'
            category='HOME'
            categoryTwo='ABOUT'
        />
        <div className='livePage__videoSection'>
            <header className='livePage__header'>
                <h4>Featured Live Streams</h4>
                <p onClick={() => showMoreItem()}><PlayArrowIcon className='livePage__playIcon' /> PLAY ALL</p>
            </header>
            <div className='livePage__featured'>
            {liveCardData.slice(0, visible).map((item, index) => {
               return (
                  <LiveVideoCardRow
                      item={item}
                      key={index}
                  />
               );
            })}
            </div>
            <hr className='livePage__hr' />
        <div className='liveNow__section'>
            <header className='liveNow__header'>
                <h4>Live Now</h4>
            </header>
            <LiveNowCardRow />
        </div>
        <hr className='liveNow__hr' />
        <div className='liveRecent__section'>
            <header className='liveRecent__header'>
                <h4>Recent Live Streams</h4>
            </header>
            <LiveRecentCardRow />
        </div>
        </div>
    </div>
  );
};

const liveCardData = [
  {
    image: 'https://i.ytimg.com/vi/4g5di64LULs/maxresdefault.jpg?v=63122afc',
    title: 'The After Power Hour,A Rings of Power LiveStream...',
    channel: 'DonMarshall72',
    views_timestamp: '3.4K views • Streamed 1 day ago',
  },
  {
    image: 'https://i.ytimg.com/vi/v3E8ASVw9Zc/maxresdefault.jpg',
    title: '2022 Made In America Festival',
    channel: 'Roc Nation',
    views_timestamp: '700 watching',
  },
  {
    image: 'https://i.ytimg.com/vi/HHFN5SJT02M/maxresdefault_live.jpg',
    title: 'Manchester United vs Arsenal LIVE Stream...',
    channel: 'The United Stand',
    views_timestamp: '73K watching',
  },
  {
    image: 'https://i.ytimg.com/vi/ndGcDIfjRFY/maxresdefault.jpg',
    title: '2022 LEC Summer - Playoffs Round 2: MAD vs FNC',
    channel: 'LEC',
    views_timestamp: '48K watching',
  },
  {
    image: 'https://i.ytimg.com/vi/w_Ma8oQLmSM/hqdefault_live.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCMSIKft44Z0xm0q-Tgfe7nQANL8A',
    title: 'LIVE: Latest news headlines and live events | ABC News',
    channel: 'ABC News',
    views_timestamp: '4K watching',
  }
];

export default LivePage;