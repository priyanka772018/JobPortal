import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [view, setView] = useState('grid');

  const toggleView = (newView) => {
    setView(newView);
  };

  return (
    <div className="sidebar">
      <h3>Grids View</h3>
      <div className="view-toggle">
        <button 
          className={view === 'grid' ? 'active' : ''} 
          onClick={() => toggleView('grid')}
        >
          Grid View
        </button>
        <button 
          className={view === 'list' ? 'active' : ''} 
          onClick={() => toggleView('list')}
        >
          List View
        </button>
      </div>
      {view === 'grid' ? (
        <>
          <div className="chapter-indicator">Chapter 1</div>
          <div className="grid-container">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`grid-item ${i === 0 ? 'active' : ''}`}>{i + 1}</div>
            ))}
          </div>
          <div className="chapter-indicator">Chapter 2</div>
          <div className="grid-container">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`grid-item ${i === 10 ? 'active' : ''}`}>{i + 1}</div>
            ))}
          </div>
          <div className="chapter-indicator">Chapter 3</div>
          <div className="grid-container">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`grid-item ${i === 15 ? 'active' : ''}`}>{i + 1}</div>
            ))}
          </div>
        </>
      ) : (
        <div className="list-view">
          <div className="chapter-indicator">Chapter 1</div>
          <ul>
            {[...Array(20)].map((_, i) => (
              <li key={i} className={i === 0 ? 'active' : ''}>{`Question ${i + 1}`}</li>
            ))}
          </ul>
          <div className="chapter-indicator">Chapter 2</div>
          <ul>
            {[...Array(20)].map((_, i) => (
              <li key={i} className={i === 10 ? 'active' : ''}>{`Question ${i + 1}`}</li>
            ))}
          </ul>
          <div className="chapter-indicator">Chapter 3</div>
          <ul>
            {[...Array(20)].map((_, i) => (
              <li key={i} className={i === 15 ? 'active' : ''}>{`Question ${i + 1}`}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
