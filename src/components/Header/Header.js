import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import YouTubePremium from '@mui/icons-material/YouTube';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import './Header.css';



const Header = ({ setSearchResults, searchResults }) => {
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  }

  const handleSearchChange = (e) => {
    setSearchResults(e.target.value);
  }


  return (
        <div className='header'>
           <div className='header__left__container'>
               <MenuIcon className='header__menuIcon' />
               <Link to="/">
                 <img 
                   className='header__logo'
                   src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg'
                   alt='youtube logo'
                  />
               </Link>
           </div>

          <div className='header__center__container'>
                <form onSubmit={handleSearchSubmit}>
                  <input 
                    type='text' 
                    placeholder="Search"
                    className='header__input' 
                    value={searchResults}
                    onChange={handleSearchChange}
                  />
               </form>
                <Link to='/search'>
                  <SearchIcon className="header__searchButton" />
                </Link>
             </div>
          
           <div className='header__right__container'>
               <YouTubePremium onClick={() => navigate('/premium')} className='header__premium' />
               <VideoCallIcon className='header__icons' />
               <AppsIcon className='header__icons' />
               <NotificationsIcon className='header__icons' />
               <Avatar 
                 alt="Remy Sharp"
                 src="/static/images/avatar/1.jpg" 
                 className='avatar' />
           </div>
        </div>
  );
};

export default Header;