import React, { Component, useState } from 'react';
import './authentication.scss';

import {useDispatch} from 'react-redux';
import { login } from '../../actions';

function Authentication(){
    const dispatch = useDispatch();

    const [loggedInTab, changeTab] = useState(true);

    const handleChangeTab = () => {
        changeTab(!loggedInTab)
    }

    const handleOnSubmit = () => {
        dispatch(login())
    }

    return(
        <div className="authForm">
            <div className="container">
            {loggedInTab && (
                <Login
                    onClick={handleChangeTab}
                    onSubmit={handleOnSubmit}
                />
            )}
            {!loggedInTab && (
                <Register
                    onClick={handleChangeTab}
                />
            )}
            </div>
        </div>
    )
}

export default Authentication;


class Login extends Component {
    constructor (props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    changeInput = (type, e) => {
        this.setState({
            [type]: e.target.value
        })
    }

    submit = () => {
        const values = {
            username: this.state.username,
            password: this.state.password
        }

        this.props.onSubmit(values, 'login');
    }

    render(){
        return (
            <div className="loginFrom">
                <div>
                    <h2>Login</h2>
                    <form className="" autoComplete="off">
                        <div className="inputGroup">
                            <input type="text" name="lusername" placeholder="Username or Email" autoComplete="off" onChange={this.changeInput.bind(this, 'username')}/>
                        </div>
                        <div className="inputGroup">
                            <input type="password" autoComplete="new-password" placeholder="Password" onChange={this.changeInput.bind(this, 'password')}/>
                        </div>
                    </form>
                </div>

                <div>
                    <div className="inputGroup">
                        <button className="btn btnLogin" onClick={this.submit}>Login</button>
                    </div>
                    <small onClick={this.props.onClick}>Dont have an accont? Create one here</small>
                </div>
            </div>
        )
    }
}

class Register extends Component {
    constructor (props) {
        super(props)

        this.state = {
            name: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    changeInput = (type, e) => {
        this.setState({
            [type]: e.target.value
        })
    }

    submit = () => {
        const values = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        this.props.onSubmit(values, 'Register');
    }

    render(){
        return (
            <div className="loginFrom">
                <div>
                    <h2>Register</h2>
                    <form className="" autoComplete="off">
                        <div className="inputGroup">
                            <input type="text" name="rname" placeholder="Full Name" autoComplete="off" onChange={this.changeInput.bind(this, 'name')}/>
                        </div>
                        <div className="inputGroup">
                            <input type="text" name="rusername" placeholder="Username" autoComplete="off" onChange={this.changeInput.bind(this, 'username')}/>
                        </div>
                        <div className="inputGroup">
                            <input type="text" name="remail" placeholder="Email" autoComplete="off" onChange={this.changeInput.bind(this, 'email')}/>
                        </div>
                        <div className="inputGroup">
                            <input type="password" autoComplete="new-password" placeholder="Password" onChange={this.changeInput.bind(this, 'password')}/>
                        </div>

                        <div className="inputGroup">
                            <input type="password" autoComplete="new-password" placeholder="Confirm Password" onChange={this.changeInput.bind(this, 'confirmPassword')}/>
                        </div>
                    </form>
                </div>
                <div>
                    <div className="inputGroup">
                        <button className="btn btnLogin" onClick={this.submit}>Register</button>
                    </div>
                    <small onClick={this.props.onClick}>Already have an account? Login Here</small>
                </div>
            </div>
        )
    }
}
