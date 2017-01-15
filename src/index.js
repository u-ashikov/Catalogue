import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Components/Home/HomeView';
import Navigation from './Components/Common/NavigationBar';
import ShoppingCart from './Components/Common/ShoppingCartController';
import RingsQuantities from './Components/User/Admin/Quantities/RingsQuantitiesController';
import EarringsQuantities from './Components/User/Admin/Quantities/EarringsQuantitiesController';
import BraceletsQuantities from './Components/User/Admin/Quantities/BraceletsQuantitiesController';
import NecklacesQuantities from './Components/User/Admin/Quantities/NecklacesQuantitiesController';
import Register from './Components/User/Register/RegisterController';
import Login from './Components/User/Login/LoginController';
import Logout from './Components/User/Logout/LogoutController';
import About from './Components/About/AboutView';
import Contact from './Components/Contact/ContactView';
import CompletedOrder from './Components/User/Profile/CompletedOrdersController';
import OrderInfo from './Components/Order/OrderInfoController';
import Necklaces from './Components/Products/Necklaces/NecklacesController';
import Bracelets from './Components/Products/Bracelets/BraceletsController';
import Rings from './Components/Products/Rings/RingsController';
import ProductDetails from './Components/Products/SingleProduct/ProductDetailsController';
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
           <Route name="Necklaces-Quantity" path='/necklaces-quantity' component={NecklacesQuantities}/>
           <Route name="Rings-Quantity" path='/rings-quantity' component={RingsQuantities}/>
           <Route name="Earrings-Quantity" path='/earrings-quantity' component={EarringsQuantities}/>
           <Route name="Bracelets-Quantity" path='/bracelets-quantity' component={BraceletsQuantities}/>
           <Route name="Register" path='/register' component={Register}/>
           <Route name="Login" path='/login' component={Login}/>
           <Route name="Logout" path='/logout' component={Logout}/>
           <Route name="My Orders" path='/my-orders' component={CompletedOrder}/>
           <Route name="OrderInfo" path='/confirm-order' component={OrderInfo}/>
           <Route name="ShoppingCart" path='/shopping-cart' component={ShoppingCart}/>
           <Route name="Necklaces" path="/necklaces">
               <IndexRoute component={Necklaces}/>
               <Route
                   path=':productID' component={ProductDetails}>
               </Route>
           </Route>
           <Route name="Bracelets" path='/bracelets'>
               <IndexRoute component={Bracelets}/>
               <Route
                   path=':productID' component={ProductDetails}>
               </Route>
           </Route>
           <Route name="Rings" path="/rings">
               <IndexRoute component={Rings}/>
               <Route
                   path=":productID" component={ProductDetails}>
               </Route>
           </Route>
           <Route name="Earrings" path='/earrings'>
               <IndexRoute component={Earrings}/>
               <Route
                   path=':productID' component={ProductDetails}
               >
               </Route>
           </Route>
           <Route name="About" path='/about' component={About}/>
           <Route name="Contact" path='/contact' component={Contact}/>
       </Route>
    </Router>,
  document.getElementById('app')
);
