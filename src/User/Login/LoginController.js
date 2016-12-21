import React, { Component } from 'react';
import LoginForm from './LoginForm';
import UserModel from '../../Models/UserModel';
import SessionManager from '../../utilities/SessionManager';
import {browserHistory} from 'react-router';

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
        let username=this.state.username;
        let password=this.state.password;
        let userData={
            'username':username,
            'password':password
        };

        UserModel.loginUser(userData)
            .then(function (user) {
                SessionManager.saveSession(user);
                browserHistory.push('/home');
            })
            .catch(function (err) {
                console.log(err);
            })
    }
}
