import React, { Component } from 'react';
import './App.css';
import Navigation from './Common/NavigationBar';
import Footer from './Common/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
          <Navigation/>
          <div>
              {this.props.children}
          </div>
          <Footer/>
      </div>
    );
  }
}
