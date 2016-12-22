import React, { Component } from 'react';
import '../../../styles/user-forms.css';

export default class LoginForm extends Component {
    render() {
        return (
            <div className="login-form">
                <form className="login" onSubmit={this.props.onSubmitHandler}>
                    <div className="header">
                        <h1>Login</h1>
                        <p>Please login with your account here:</p>
                    </div>
                    <div className="sep"></div>
                    <div className="inputs">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={this.props.username}
                            onChange={this.props.onChangeHandler}
                            required
                        >
                        </input>

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.props.password}
                            onChange={this.props.onChangeHandler}
                            required
                        >
                        </input>

                        <input type="submit" value='Login'/>
                    </div>
                </form>
            </div>
        )
    }
}
