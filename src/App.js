import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import Header from './components/Header/Header';
import SearchPage from './components/SearchPage/SearchPage';
import StripePage from './components/StripePage/StripePage';
import MoviePage from './components/MoviePage/MoviePage';
import GamingPage from './components/GamingPage/GamingPage';
import LivePage from './components/LivePage/LivePage';
import SportsPage from './components/SportsPage/SportsPage';


function App() {
  const [searchResults, setSearchResults] = useState("");

  return (
    <>
      <Header searchResults={searchResults} setSearchResults={setSearchResults} />
        <Routes>
            <Route path="/search" element={<SearchPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/premium" element={<StripePage />} />
            <Route path="/movies" element={<MoviePage />} />
            <Route path="/gaming" element={<GamingPage />} />
            <Route path="/live" element={<LivePage />} />
            <Route path="/sports" element={<SportsPage />} />
        </Routes>
    </>
  );
}

export default App;
