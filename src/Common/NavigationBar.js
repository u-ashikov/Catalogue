import React, { Component } from 'react';

export default class NavigationBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Catalog</a>
                    </div>
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Home</a></li>
                            <li><a href="#">Page 1</a></li>
                            <li><a href="#">Page 1</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#"><span className="glyphicon glyphicon-user"></span> Register</a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                        </ul>
                    </div>
            </nav>
        )
    }
}