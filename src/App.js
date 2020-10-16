import React from 'react';
import HomePage from './Pages/homepage/Homepage';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
    </div>
  );
}

export default App;