import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './App.css';

import {useSelector, useDispatch} from 'react-redux';

import Authentication from './Components/Authentication';
import Home from './Components/Home';

function App() {

    const isLoggedIn = useSelector(state => state.isLogged);
    const dispatch = useDispatch();

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/">
                        { !isLoggedIn ? <Authentication /> : <Home/> }
                    </Route>
                </Switch>
            </div>
        </Router>

    );
}

export default App;
