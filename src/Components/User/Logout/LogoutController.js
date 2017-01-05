import { Component } from 'react';
import UserModel from '../../../Models/UserModel';
import SessionManager from '../../../utilities/SessionManager';
import {browserHistory} from 'react-router';
import Alert from 'react-s-alert';
import ItemsManager from '../../../utilities/ItemsManager';

export default class LogoutController extends Component {

    componentDidMount() {
        UserModel.logoutUser();
        SessionManager.clearSession();
        ItemsManager.items= {
            'rings': {},
            'earrings': {},
            'necklaces': {},
            'bracelets': {}
        };
        ItemsManager.totalItems=0;
        Alert.success('Successfully logged out!', {
            position: 'top-right',
            effect: 'stackslide',
            timeout: 5000,
            offset:30
        });
        browserHistory.push('/home');
    }

    render() {
        return null;
    }
}
