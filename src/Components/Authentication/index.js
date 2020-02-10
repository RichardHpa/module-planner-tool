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
            <div className="login">
               <div className="container" ref={ref => (this.container = ref)}>
                 {isLoggingIn && (
                   <Login containerRef={ref => (this.current = ref)} />
                 )}
                 {!isLoggingIn && (
                   <Register containerRef={ref => (this.current = ref)} />
                 )}
               </div>
             </div>
            </div>
        )
    }
}

export default Authentication;

function Login() {
  return <h1>Login</h1>;
}

function Register() {
  return <h1>Register</h1>;
}
