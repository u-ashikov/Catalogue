import React, { Component } from 'react';
import {Link} from 'react-router';

export default class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state={
            showItems:false
        }
    }
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
                                <li><Link to="/necklaces">Necklaces</Link></li>
                                <li><Link to="/bracelets">Bracelets</Link></li>
                                <li><Link to="/rings">Rings</Link></li>
                                <li><Link to="/earrings">Earrings</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li className="dropdown">
                                    <a
                                        className="dropdown-toggle"
                                        href="#"
                                        onClick={this.handleToggle.bind(this)}
                                    >Page 1 <span className="caret"></span></a>
                                    <ul
                                        className="dropdown-menu"
                                        style={{display: this.state.showItems ? 'block' : 'none' }}
                                    >
                                        <li><Link
                                            to="/home"
                                            onClick={this.handleToggle.bind(this)}
                                        >Home</Link>
                                        </li>
                                        <li><Link
                                            to="/rings"
                                            onClick={this.handleToggle.bind(this)}
                                        >Rings</Link></li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="/shopping-cart">Cart <span className="glyphicon glyphicon-shopping-cart"></span></Link></li>
                                <li><Link to="/shopping-cart">Profile <span className="glyphicon glyphicon-user"></span></Link></li>
                                <li><Link to="/logout"><span className="glyphicon glyphicon-log-out"></span>Logout</Link></li>
                            </ul>
                        </div>
                    }
                    </div>
            </nav>
        )
    }

    handleToggle(event) {
       if (this.state.showItems===true) {
           this.setState({
               'showItems':false
           })
       } else {
           this.setState({
               'showItems':true
           })
       }
    }
}