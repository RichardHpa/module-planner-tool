import React, { Component } from 'react';
import './authentication.scss';
import axios from 'axios';

import {useSelector, useDispatch} from 'react-redux';
import { login, logout} from '../../actions';

class Authentication extends Component {
    constructor (props) {
        super(props)

        this.state = {
            isLoggingIn: true
        }
    }

    changeTab = () => {
        this.setState({
            isLoggingIn: !this.state.isLoggingIn
        })
    }

    handleSubmit = (values, type) => {
        // console.log(values);
        // console.log(type);
        // axios.post('')
        //     .them()
        //
        // }
    }

    render(){
        const { isLoggingIn } = this.state;
        return (
            <div className="authForm">
                <div className="container" ref={ref => (this.container = ref)}>
                {isLoggingIn && (
                    <Login
                        containerRef={ref => (this.current = ref)}
                        onClick={this.changeTab}
                        submitForm={this.handleSubmit}
                    />
                )}
                {!isLoggingIn && (
                    <Register
                        containerRef={ref => (this.current = ref)}
                        onClick={this.changeTab}
                        submitForm={this.handleSubmit}
                    />
                )}
                </div>
            </div>
        )
    }
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

        this.props.submitForm(values, 'login');
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

        this.props.submitForm(values, 'Register');
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
