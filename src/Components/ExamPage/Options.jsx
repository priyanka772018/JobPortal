import React from 'react';
import './Options.css';

const Options = () => {
  return (
    <div className="options-container">
      <div className="options-header">Options</div>
      <ul className="options-list">
        <li>
          <label>
            <input type="radio" name="option" value="3" />
            <span className="option-label">3</span>
          </label>
        </li>
        <li>
          <label>
            <input type="radio" name="option" value="5" />
            <span className="option-label">5</span>
          </label>
        </li>
        <li>
          <label>
            <input type="radio" name="option" value="7" />
            <span className="option-label">7</span>
          </label>
        </li>
        <li>
          <label>
            <input type="radio" name="option" value="cant_be_determined" />
            <span className="option-label">can't be determined</span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Options;
