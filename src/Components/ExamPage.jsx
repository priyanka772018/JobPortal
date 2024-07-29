import React from 'react';
import Header from './ExamPage/Header';
import Question from './ExamPage/Question';
import Options from './ExamPage/Options';
import Sidebar from './ExamPage/Sidebar';
import Last from './ExamPage/Last';
import './ExamPage.css';

const ExamPage = () => {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <div className="question-options-container">
          <div className="question-container">
            <Question />
          </div>
          <div className="options-container">
            <Options />
          </div>
        </div>
        <Sidebar />
      </div>
      <Last />
    </div>
  );
};

export default ExamPage;
