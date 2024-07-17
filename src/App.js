import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import Header from './Components/Header';
import NavigationBar from './Components/NavigationBar';
import Vacancies from './Components/Vacancies';
import LoginForm from './Components/LoginForm';
import Footer from './Components/Footer';
import RegistrationForm from './Components/RegistrationForm';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={
        <div>
          <Header />
          <NavigationBar />
          <Vacancies />
          <LoginForm />
          <Footer />
        </div>
      } />
      <Route path="/register" element={<RegistrationForm />} />
    </Routes>
  </Router>
);

export default App;
