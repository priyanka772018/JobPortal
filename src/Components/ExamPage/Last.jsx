import React from 'react';
import './Last.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTimesCircle, faBookmark, faFlag, faSave } from '@fortawesome/free-solid-svg-icons';

const Last = () => {
  return (
    <div className="footer">
      <button className="footer-button mark-review">
        <FontAwesomeIcon icon={faStar} />
        Mark for Review
      </button>
      <button className="footer-button clear-response">
        <FontAwesomeIcon icon={faTimesCircle} />
        Clear Response
      </button>
      <button className="footer-button bookmark">
        <FontAwesomeIcon icon={faBookmark} />
        Bookmark
      </button>
      <button className="footer-button report">
        <FontAwesomeIcon icon={faFlag} />
        Report
      </button>
      <button className="footer-button save-next">
        <FontAwesomeIcon icon={faSave} />
        Save & Next
      </button>
    </div>
  );
};

export default Last;
