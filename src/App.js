import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import DoodleCard from './components/DoodleCard/DoodleCard';
import doodleData from './components/DoodleCard/doodleData';

function App() {
  return (
    <div className="App">
      <div className="nav-links">
        <a
          href="https://maja-gach-portfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="logo"></div>
        </a>
        <a
          href="https://twitter.com/maja_gch"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="twitter-logo"></div>{' '}
        </a>
      </div>
      <Header />
      {doodleData.map((doodle) => {
        return <DoodleCard key={doodle.id} doodle={doodle} />;
      })}
    </div>
  );
}

export default App;
