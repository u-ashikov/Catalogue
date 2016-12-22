import React, { Component } from 'react';
import {Link} from 'react-router';

export default class NavigationBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                       <Link className="navbar-brand" to="/home">Catalog</Link>
                    </div>
                    {!sessionStorage.getItem('authToken') ?
                        <div>
                            <ul className="nav navbar-nav">
                                <li><Link to="/home">Home</Link></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="/register"><span className="glyphicon glyphicon-user"></span> Register</Link></li>
                                <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span>Login</Link></li>
                            </ul>
                        </div>
                        :
                        <div>
                            <ul className="nav navbar-nav">
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/bracelets">Bracelets</Link></li>
                                <li><Link to="/rings">Rings</Link></li>
                                <li><Link to="/earrings">Earrings</Link></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="/logout"><span className="glyphicon glyphicon-log-out"></span>Logout</Link></li>
                            </ul>
                        </div>
                    }
                    </div>
            </nav>
        )
    }
}