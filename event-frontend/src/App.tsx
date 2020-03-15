import React, { useEffect, FC } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  withRouter,
  RouteComponentProps
} from 'react-router-dom';
import { compose } from 'redux';
import { connect, Provider } from 'react-redux';
import { initializeApp } from 'redux/reducers/appReducer';
import store from 'redux/helpers/store';
import { AppStateType } from 'redux/reducers';
import Preloader from 'screens/shared/components/common/Preloader';
import { withSuspense } from 'hoc/withSuspense';
// Routes
import HomeContainer from 'screens/shared/pages/Home/HomeContainer';
import NotFound from 'screens/shared/pages/NotFound';
// React.lazy
const EventContainer = React.lazy(() =>
  import('screens/shared/pages/Event/EventContainer')
);

type MapStateToPropsType = {
  initialized: boolean;
};

type MapDispatchToPropsType = {
  initializeApp: () => void;
};

type AppPropsType = MapStateToPropsType &
  MapDispatchToPropsType &
  RouteComponentProps;

const App: FC<AppPropsType> = props => {
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

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  initialized: state.app.initialized
});

const AppContainer = compose(
  connect(mapStateToProps, {
    initializeApp
  })
)(withRouter(App));

const Event = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default Event;
