import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Routes
import Home from 'screens/shared/pages/Home';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/home" exact render={() => <Home />} />
        <Route render={() => <h1>NotFound</h1>} />
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
