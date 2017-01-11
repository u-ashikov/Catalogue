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
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="/shopping-cart">Cart <span className="glyphicon glyphicon-shopping-cart"></span></Link></li>
                                <li className="dropdown"
                                    onMouseEnter={this.handleToggle.bind(this)}
                                    onMouseLeave={this.handleToggle.bind(this)}
                                >
                                    <Link
                                          className="dropdown-toggle"
                                          style={{
                                                  cursor:'pointer'
                                          }}
                                    >Profile<span className="glyphicon glyphicon-user"></span> <span className="caret"></span></Link>
                                    <ul
                                        className="dropdown-menu"
                                        style={{display: this.state.showItems ? 'block' : 'none' }}
                                    >
                                        <li
                                            onClick={this.handleToggle.bind(this)}
                                        ><Link
                                            to="/my-orders"
                                            >My Orders</Link>
                                        </li>
                                        <li
                                            onClick={this.handleToggle.bind(this)}
                                        ><Link
                                            to="/logout"
                                        >Logout</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    }
                    </div>
            </nav>
        )
    }

    handleToggle(event) {
        this.setState({
            'showItems':!this.state.showItems
        });
    }
}