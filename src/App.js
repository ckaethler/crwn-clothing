import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/homepage/Homepage';
import ShopPage from './Pages/shop/ShopPage';
import Header from './Components/Header/Header'
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;