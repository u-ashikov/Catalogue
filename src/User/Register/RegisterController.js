import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
import UserModel from '../../Models/UserModel';
import SessionManager from '../../utilities/SessionManager';
import {browserHistory} from 'react-router';
import Alert from 'react-s-alert';

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
        let userData={
            username:this.state.username,
            password:this.state.password
        };

        UserModel.registerUser(userData)
            .then(function (user) {
                SessionManager.saveSession(user);
                Alert.closeAll();
                Alert.success('Registration successfully!', {
                    position: 'top-right',
                    effect: 'stackslide',
                    timeout: 5000,
                    offset:30
                });
                browserHistory.push('/home');
            })
    }
}
