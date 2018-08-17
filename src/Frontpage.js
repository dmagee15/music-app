import React, { Component } from 'react';
import logo from './logo.svg';
import './Frontpage.css';
import Signup from './components/Signup';
import Login from './components/Login';

class Frontpage extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeSection: 'login'
        }
    }
    loginButtonHandler = () => {
        this.setState({
            activeSection: 'login'
        })
    }
    signupButtonHandler = () => {
        this.setState({
            activeSection: 'signup'
        })
    }
  render() {

    const sectionContent = this.state.activeSection=='login' ? <Login /> : <Signup />;

    return (
        <div className="frontpageBackground">
            <div className="loginmodal">
                <div className="loginsignup">
                    <button onClick={this.loginButtonHandler} className={"loginFormButton "+(this.state.activeSection=='login'?"active":"")}>Login</button>
                    <button onClick={this.signupButtonHandler} className={"signupFormButton "+(this.state.activeSection=='signup'?"active":"")}>Sign Up</button>
                </div>
                { sectionContent }
                <div className="emptySpaceFrontpageModal">
                </div>
                <div className="modalFooter">
                </div>
            </div>
            <div className="emptySpaceFrontpage">
            </div>
            <div className="frontpageFooter">
            </div>
        </div>
    );
  }
}

export default Frontpage;