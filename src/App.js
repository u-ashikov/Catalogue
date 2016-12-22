import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Common/NavigationBar';
import Footer from './Components/Common/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-s-alert';

export default class App extends Component {
  render() {
    return (
      <div className="App">
          <Navigation/>
          <div>
              {this.props.children}
          </div>
          <Footer/>
          <Alert stack={{limit: 3}} />
      </div>
    );
  }
}
