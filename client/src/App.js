import React from 'react';
import LandingPage from './components/views/LandingPage/LandingPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
<Router>
      <div>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/about">
          </Route>
          <Route path="/dashboard">
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;