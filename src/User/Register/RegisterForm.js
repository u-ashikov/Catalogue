import React, { Component } from 'react';

export default class RegisterForm extends Component {
    render() {
        return (
            <form className="register" onSubmit={this.props.onSubmitHandler}>
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
                <input type="submit" value='Register'/>
            </form>
        )
    }
}
