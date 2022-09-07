import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import RecommendedVideos from '../RecommendedVideos/RecommendedVideos';
import './HomePage.css';

const HomePage = () => {
  return (
        <div className='HomePage'>
           <Sidebar />
           <RecommendedVideos />
        </div>
  );
};

export default HomePage;