import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";
import './App.css';

import Authentication from './components/Authentication';

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
