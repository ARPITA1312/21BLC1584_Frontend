import React from 'react';
import './MainContent.css';
import SearchResults from './SearchResults';

const MainContent = () => {
  return (
    <div className="main-content">
      <h1>About 159 Trademarks found for "nike"</h1>
      <div className="search-results">
        <SearchResults />
      </div>
    </div>
  );
}

export default MainContent;
