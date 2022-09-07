import React, { useState } from 'react';
import Stripe from '../StripeCheckout/Stripe';
import DownloadRow from '../DownloadRow/DownloadRow';
import ImageRow from '../ImageRow/ImageRow';
import Accordian from '../Accordian/Accordian';
import AccordianHeader from '../AccordianHeader/AccordianHeader';
import './StripePage.css';


const StripePage = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
        return setSelected(null);
    }

    setSelected(i);
  }

  return (
    <div className='stripePage'>
       <Stripe />
       <DownloadRow />
       <ImageRow />
       <AccordianHeader />
       <div className='accordian'>
         {data.map((item, i) => {
            return (
              <Accordian
                 item={item} 
                 i={i} 
                 toggle={toggle} 
                 selected={selected} 
              />
            )
         })}
       </div>
    </div>
  );
};
  const data = [
    {
      question: 'What is included with YouTube Premium?',
      answer: 'YouTube Ad-free YouTube: Watch millions of ad-free videos. Learn more Download videos to watch offline: Save videos and playlists on mobile devices and play them offline',
    },
    {
      question: 'How does downloading videos and music work?',
      answer: 'Download videos and music on your mobile devices to watch and listen offline for up to 30 days without being connected to the internet. For more details on how to download videos and music, please see this Help Center article.',
    },
    {
      question: 'What is background play?',
      answer: 'Background play allows videos and music to keep playing in the background, even when you open other apps or turn the screen off on your mobile device. For more details on background play, please see this Help Center article.',
    },
    {
      question: 'How can I cancel my membership?',
      answer: 'You can cancel your membership by visiting the Paid Membership page. You can rejoin YouTube Premium at any time.',
    }
  ];

export default StripePage;