import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import Authentication from './Components/Authentication';

function App() {
  return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/">
              <Authentication />
            </Route>
          </Switch>
        </div>
      </Router>

  );
}

export default App;

function Home() {
  return <h1>Planner</h1>;
}

function About() {
  return <h1>About</h1>;
}

function Users() {
  return <h1>Users</h1>;
}
