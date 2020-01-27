import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Default_Landing from './pages/layouts/default_landing';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Default_Landing} />
        <Redirect from="*" to="/" />
      </Switch>
    </div>
  );
}

export default App;
