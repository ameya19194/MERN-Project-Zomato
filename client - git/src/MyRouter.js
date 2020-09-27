import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeNew from './HomeNew';
import Details from './components/Details'
import RestaurantPage from './components/RestaurantPage';
import OrderPage from './components/OrderPage';
import OrderDisplay from './components/OrderDisplay';
import OrderSuccess from './components/OrderSuccess';

class Routing extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path="/" component={HomeNew}></Route>
                <Route exact path="/restdetails/:area/:mealtype" component={Details}></Route>
                <Route exact path="/restaurantpage/:id" component={RestaurantPage}></Route>
                <Route exact path="/orderpage/:id/:restname" component={OrderPage}></Route>    
                <Route exact path="/orderdisplay" component={OrderDisplay}></Route>
                <Route exact path="/ordersuccess" component={OrderSuccess}></Route>      
            </BrowserRouter>
        );
    }
}

export default Routing;