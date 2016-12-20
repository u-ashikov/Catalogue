import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home/HomeView';
import Navigation from './Common/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import {Router,IndexRoute,Route,browserHistory} from 'react-router';

ReactDOM.render(
    <Router history={browserHistory}>
       <Route name="Catalog" path='/' component={App}>
           <IndexRoute name="Home" component={Home}/>
           <Route name="Home" path='/home' component={Home}/>
           <Route name="Header" path='/header' component={Navigation}/>
       </Route>
    </Router>,
  document.getElementById('app')
);
