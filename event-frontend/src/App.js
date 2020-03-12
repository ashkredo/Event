import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect, Provider } from 'react-redux';
import { initializeApp } from 'redux/reducers/appReducer';
import store from 'redux/helpers/store';
import Preloader from 'screens/shared/components/common/Preloader';
import { withSuspense } from 'hoc/withSuspense';
// Routes
import HomeContainer from 'screens/shared/pages/Home/HomeContainer';
import NotFound from 'screens/shared/pages/NotFound';
// React.lazy
const EventContainer = React.lazy(() =>
  import('screens/shared/pages/Event/EventContainer')
);

const App = props => {
  useEffect(() => {
    if (!props.initialized) props.initializeApp();
  });
  if (!props.initialized)
    return (
      <>
        <Preloader />
        connecting to backend...
      </>
    );

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact render={() => <HomeContainer />} />
        <Route path="/home" exact render={() => <HomeContainer />} />
        <Route path="/event" render={withSuspense(EventContainer)} />
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
