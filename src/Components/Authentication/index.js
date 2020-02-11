import React, { Component } from 'react';
import './authentication.scss';

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

    render(){
        const { isLoggingIn } = this.state;
        const current = isLoggingIn ? "Register" : "Login";

        return(
            <div className="authForm">
                <div className="container" ref={ref => (this.container = ref)}>
                {isLoggingIn && (
                    <Login
                        containerRef={ref => (this.current = ref)}
                        onClick={this.changeTab}
                    />
                )}
                {!isLoggingIn && (
                    <Register
                        containerRef={ref => (this.current = ref)}
                        onClick={this.changeTab}
                    />
                )}
                </div>
            </div>
        )
    }
}

export default Authentication;

const Login = (props) => {
    const { onClick } = props
    return (
        <div className="loginFrom">
            <div>
                <h2>Login</h2>
                <form className="" autoComplete="off">
                    <div className="inputGroup">
                        <input type="text" name="lusername" placeholder="Username or Email" autoComplete="off"/>
                    </div>
                    <div className="inputGroup">
                        <input type="lpassword" autoComplete="new-password" placeholder="Password"/>
                    </div>
                </form>
            </div>

            <div>
                <div className="inputGroup">
                    <button className="btn btnLogin">Login</button>
                </div>
                <small onClick={onClick}>Dont have an accont? Create one here</small>
            </div>
        </div>
    );
}

const Register = (props) => {
    const { onClick } = props
    return (
        <div className="loginFrom">
            <div>
                <h2>Register</h2>
                <form className="" autoComplete="off">
                    <div className="inputGroup">
                        <input type="text" name="rname" placeholder="Your Name" autoComplete="off"/>
                    </div>
                    <div className="inputGroup">
                        <input type="text" name="rusername" placeholder="Username" autoComplete="off"/>
                    </div>
                    <div className="inputGroup">
                        <input type="text" name="remail" placeholder="Email" autoComplete="off"/>
                    </div>
                    <div className="inputGroup">
                        <input type="password" autoComplete="new-password" placeholder="Password"/>
                    </div>

                    <div className="inputGroup">
                        <input type="password" autoComplete="new-password" placeholder="Confirm Password"/>
                    </div>
                </form>
            </div>
            <div>
                <div className="inputGroup">
                    <button className="btn btnLogin">Register</button>
                </div>
                <small onClick={onClick}>Already have an account? Login Here</small>
            </div>
        </div>

    )
}
