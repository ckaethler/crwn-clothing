import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './Pages/homepage/Homepage';
import ShopPage from './Pages/shop/ShopPage';
import './App.css';

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
    </div>
  );
}

export default App;