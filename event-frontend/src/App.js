import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Routes
import Home from 'screens/shared/pages/Home';
import NotFound from 'screens/shared/pages/NotFound';

const App = () => {
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

const Event = props => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default Event;
