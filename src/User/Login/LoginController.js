import React, { Component } from 'react';
import LoginForm from './LoginForm';

export default class LoginController extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:'',
            password:''
        }
    }

    render() {
        return (
            <LoginForm
                username={this.state.username}
                password={this.state.password}
                onChangeHandler={this.onChangeHandler.bind(this)}
                onSubmitHandler={this.onSubmitHandler.bind(this)}
            />
        )
    }

    onChangeHandler(event) {
        let newState={};
        newState[event.target.name]=event.target.value;
        this.setState(newState);
    }

    onSubmitHandler(event) {
        event.preventDefault();
        alert(this.state.username+" "+this.state.password);
    }
}
