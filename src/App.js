import React from 'react';
import { withRouter, Route, Redirect, Switch } from "react-router-dom"
import { connect } from 'react-redux'
import { compose } from 'redux'

import HeaderContainer from './components/Header/HeaderContainer'
import NavbarContainer from './components/Navbar/NavbarContainer'
import LaunchesContainer from './components/Launches/LaunchesContainer'

import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <div className='app-wrapper-container'>
        <NavbarContainer />
        <div className='app-wrapper-content'>
          <Switch>
            <Route exact path='/'
              render={() => <Redirect to='/launches' />} />
            <Route exact path='/launches'
              render={() => <LaunchesContainer />} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  // initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, {
    // initializeApp
  })
)(App)
