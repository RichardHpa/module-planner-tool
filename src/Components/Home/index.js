import React, { Component, useState } from 'react';
import './home.scss';

import {useDispatch} from 'react-redux';
import { logout } from '../../actions';

function Home(){

    const dispatch = useDispatch();

    const [loggedInTab, changeTab] = useState(true);

    const handleChangeTab = () => {
        changeTab(!loggedInTab)
    }

    const handleLogout = () => {
        dispatch(logout())
    }

    return(
        <div className="authForm">
            <div className="container">
                <h3>You are Logged In</h3>
                <div>
                    <div className="inputGroup">
                        <button className="btn btnLogin" onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
