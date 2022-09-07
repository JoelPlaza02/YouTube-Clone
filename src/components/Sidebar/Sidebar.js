import React from 'react';
import { Link } from 'react-router-dom';
import SideBarRow from '../SideBarRow/SideBarRow';
import './Sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import RestoreIcon from '@mui/icons-material/Restore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import GamingIcon from '@mui/icons-material/SportsEsports';
import LiveIcon from '@mui/icons-material/Sensors';


const Sidebar = () => {
  return (
     <>
       <div className='sidebar'>
          <SideBarRow selected Icon={HomeIcon} title='Home' />
          <SideBarRow Icon={ExploreIcon} title='Explore' />
          <SideBarRow Icon={SubscriptionsIcon} title='Subscriptions' />
          <hr />
          <SideBarRow Icon={VideoLibraryIcon} title='Library' />
          <SideBarRow Icon={RestoreIcon} title='History' />
          <SideBarRow Icon={SlideshowIcon} title='Your Videos' />
          <SideBarRow Icon={WatchLaterIcon} title='Watch Later' />
          <SideBarRow Icon={ThumbUpIcon} title='Liked Videos' />
          <SideBarRow Icon={ExpandMoreIcon} title='Show more' />
          <hr />
          <p className='sidebar__exploreHeader'>EXPLORE</p>
          <Link style={{textDecoration: 'none', color: 'black'}} to="/movies">
             <SideBarRow Icon={LocalMoviesIcon} title='Movies & Shows' />
          </Link>
          <Link style={{textDecoration: 'none', color: 'black'}} to="/gaming">
             <SideBarRow Icon={GamingIcon} title='Gaming' />
          </Link>
          <Link style={{textDecoration: 'none', color: 'black'}} to="/live">
             <SideBarRow Icon={LiveIcon} title='Live' />
          </Link>
       </div>
     </>
  );
};

export default Sidebar;