import React, { Component } from 'react';
import '../../../styles/user-forms.css';

export default class RegisterForm extends Component {
    render() {
        return (
            <div className="register-form">
                <form className="register" onSubmit={this.props.onSubmitHandler}>
                    <div className="header">
                        <h1>Registration</h1>
                        <p>Please fill out this form:</p>
                    </div>
                    <div className="sep"></div>
                    <div className="inputs">
                        <input
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={this.props.username}
                            onChange={this.props.onChangeHandler}
                            required
                        >
                        </input>

                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={this.props.password}
                            onChange={this.props.onChangeHandler}
                            required
                        >
                        </input>

                        <input
                            type="password"
                            placeholder="Repeat Password"
                            name="repeat"
                            value={this.props.repeatpass}
                            onChange={this.props.onChangeHandler}
                            required
                        >
                        </input>

                        <input type="submit" value='Register'/>
                    </div>
                </form>
            </div>

        )
    }
}
