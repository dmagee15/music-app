import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Signup extends Component{
    constructor(props){
        super(props);
    }
    continueHandler = () => {
        this.props.history.push('/create');
    }
    render(){
        return (
            <div>
                <form>
                    <div>
                        <input placeholder="Username" type="text" />
                    </div>
                    <div>
                        <input placeholder="Password" type="text" />
                    </div>
                    <div>
                        <input placeholder="Email" type="text" />
                    </div>
                    <div className="loginButtonContainer">
                        <button className="loginButton">Sign Up</button>
                        <h3>OR</h3>
                        <button className="continueButton" onClick={this.continueHandler}>Continue without Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(Signup);