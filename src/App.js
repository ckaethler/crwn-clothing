import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth, createUserProfileDocument } from './Firebase/Firebase.Utils';

import HomePage from './Pages/Homepage/Homepage.Component';
import ShopPage from './Pages/Shop/Shop.Component';
import SignInSignUp from './Pages/SignInSignUp/SignInSignUp.Component'
import CheckoutPage from './Pages/Checkout/Checkout.Component';

import Header from './Components/Header/Header.Component';

import { setCurrentUser } from './Redux/User/User.Actions';
import { selectCurrentUser } from './Redux/User/User.Selectors';

import './App.Styles.css';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);

        (await userRef).onSnapshot(snapShot => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() { 
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/checkout' component={CheckoutPage} />
          <Route 
            exact 
            path='/signin' 
            render={() => this.props.currentUser ? (
              <Redirect to="/"/>
            ) : (
              <SignInSignUp />
            )} 
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);