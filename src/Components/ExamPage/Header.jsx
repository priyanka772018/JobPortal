import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-topics">
        <button className="topic-button">Topics</button>
        <button className="topic-button active">Chapter 1</button>
        <button className="topic-button">Chapter 2</button>
        <button className="topic-button">Chapter 3</button>
      </div>
      <div className="header-title">
        <h1>Chapter 1</h1>
      </div>
    </header>
  );
};

export default Header;
