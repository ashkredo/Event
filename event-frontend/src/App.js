import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect, Provider } from 'react-redux';
import { initializeApp } from 'redux/reducers/appReducer';
import store from 'redux/helpers/store';
import Preloader from 'screens/shared/components/common/Preloader';
// Routes
import Home from 'screens/shared/pages/Home';
import NotFound from 'screens/shared/pages/NotFound';

const App = props => {
  useEffect(() => {
    props.initializeApp();
  });
  if (!props.initialized) return <Preloader />;

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/home" exact render={() => <Home />} />
        <Route render={() => <NotFound />} />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => ({
  initialized: state.app.initialized
});

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const Event = props => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default Event;
