import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Components/Home/HomeView';
import Navigation from './Components/Common/NavigationBar';
import Register from './Components/User/Register/RegisterController';
import Login from './Components/User/Login/LoginController';
import Logout from './Components/User/Logout/LogoutController';
import Bracelets from './Components/Products/Bracelets/BraceletsController';
import Rings from './Components/Products/Rings/RingsController';
import Earrings from './Components/Products/Earrings/EarringsController';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {Router,IndexRoute,Route,browserHistory} from 'react-router';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';

ReactDOM.render(
    <Router history={browserHistory}>
       <Route name="Catalog" path='/' component={App}>
           <IndexRoute name="Home" component={Home}/>
           <Route name="Home" path='/home' component={Home}/>
           <Route name="Navigation Bar" path='/header' component={Navigation}/>
           <Route name="Register" path='/register' component={Register}/>
           <Route name="Login" path='/login' component={Login}/>
           <Route name="Logout" path='/logout' component={Logout}/>
           <Route name="Bracelets" path='/bracelets' component={Bracelets}/>
           <Route name="Rings" path='/rings' component={Rings}/>
           <Route name="Earrings" path='/earrings' component={Earrings}/>
       </Route>
    </Router>,
  document.getElementById('app')
);
