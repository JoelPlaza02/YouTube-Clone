import React from 'react';
import './DownloadRow.css';

const DownloadRow = () => {
  return (
    <div className='downloadRow'>
      <div className='downloadRow__left'>
        <img 
          src='https://www.gstatic.com/youtube/img/promos/growth/ytr_lp2_icon_feature_playtransparent_168x168.png'
          alt=''
          className='downloadRow__image'
        />
        <h3 className='downloadRow__title'>Ad-free & background play</h3>
        <p className='downloadRow__desc'>Watch videos uninterrupted by ads, while using other apps, or when the screen is locked.</p>
      </div>

      <div className='downloadRow__center'>
        <img 
          src='https://www.gstatic.com/youtube/img/promos/growth/ytm_lp2_icon_feature_download_168x168.png'
          alt=''
          className='downloadRow__image'
        />
        <h3 className='downloadRow__title'>Downloads</h3>
        <p className='downloadRow__desc'>Save videos for when you really need them – like when you’re on a plane or commuting.</p>
      </div>

      <div className='downloadRow__right'>
        <img 
          src='https://www.gstatic.com/youtube/img/promos/growth/ytr_lp2_icon_feature_musicapp_168x168.png'
          alt=''
          className='downloadRow__image'
        />
        <h3 className='downloadRow__title'>YouTube Music Premium</h3>
        <p className='downloadRow__desc'>Download our new music app and listen without interruptions.</p>
      </div>

    </div>
  );
};

export default DownloadRow;