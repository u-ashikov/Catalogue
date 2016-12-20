import React, { Component } from 'react';

export default class LoginForm extends Component {
    render() {
        return (
            <div>
                <h1>Login Form</h1>
                <form className="login" onSubmit={this.props.onSubmitHandler}>
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
                </form>
            </div>
        )
    }
}
