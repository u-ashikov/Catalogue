import React, { Component } from 'react';
import RegisterForm from './RegisterForm'

export default class RegisterController extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:'',
            password:'',
            repeat:''
        };
    }

    render() {
        return (
            <div>
                <RegisterForm
                username={this.state.username}
                password={this.state.password}
                repeatpass={this.state.repeat}
                onChangeHandler={this.onChangeHandler.bind(this)}
                onSubmitHandler={this.onSubmitHandler.bind(this)}
                />
            </div>
        )
    }

    onChangeHandler(event) {
        let newState={};
        newState[event.target.name]=event.target.value;
        this.setState(newState);
    }

    onSubmitHandler(event) {
        event.preventDefault();
        alert('username: '+this.state.username+" password: "+this.state.password);
    }
}
