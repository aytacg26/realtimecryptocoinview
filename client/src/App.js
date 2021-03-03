import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/UI/Navbar/Navbar';
import Landing from './components/layout/Landing/Landing';
import classes from './App.module.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Landing />
    </Router>
  );
};

export default App;
