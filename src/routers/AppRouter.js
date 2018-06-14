import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../actions/shoppingCart';

import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import StorePage from '../components/StorePage';
import ProductView from '../components/ProductView';
import CartPage from '../components/CartPage';

export const history = createHistory();

export class AppRouter extends React.Component {

    componentDidMount(){
        try {
            const json = localStorage.getItem('cart');
            const cart = JSON.parse(json);
            if(cart){
                this.props.startAddToCart(cart);
            }
        } catch (err) {
            console.log(err);
        }
    }

    render(){
        return(
            <Router history={history}>
                <BrowserRouter>
                <div>
                <Header/>
                    <Switch>
                        <Route path='/' component={HomePage} exact={true}/>
                        <Route path='/store' component={StorePage} exact={true}/>
                        <Route path='/store/:id' component={ProductView} />
                        <Route path='/cart' component={CartPage} exact={true}/>
                        <Route component={NotFoundPage} />     
                    </Switch>
                </div>
                </BrowserRouter>
            </Router>
        );
    }
}


const mapDispatchToProps = (dispatch) => ({
    startAddToCart: (cart) => dispatch(addToCart(cart))
});

export default connect(undefined, mapDispatchToProps)(AppRouter);
