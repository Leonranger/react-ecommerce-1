import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Segment, Container, Label, Grid, Image, Header, Icon } from 'semantic-ui-react';
import CartPageItem  from './CartPageItem';
import {cartTotalPrice, cartTotalAmount} from '../selectors/cart-total';

export class CartPage extends React.Component {
 
    render(){     
        const cart = this.props.cart;
        const totalPrice = this.props.cartTotalPrice;
        const totalAmount = this.props.cartTotalAmount;
        return (
            <Container className='page-top-margin'>   
                {
                    cart.length > 0 ? (
                    <div className='cart-page'>
                        <div className='cart-page_items'>
                            {
                                cart.map((cart) => {
                                    return <CartPageItem key={cart.id} {...cart} />;
                                })
                            }
                        </div>
                            <Segment secondary className='cart-page_check'>
                                <h4>Order Summary</h4>
                                <div className='cart-page_check__item'>
                                    <div>Subtotal ({`${totalAmount} `}{totalAmount > 1 ? 'items' : 'item'})</div>
                                    <div><h4>${totalPrice}</h4></div>
                                </div>
                                <div className='cart-page_check__item'>
                                    <div>Shipping</div>
                                    <div><h4 className='cart-page_green'>Free</h4></div>
                                </div>
                                <div className='cart-page_check__item'>
                                    <div><h4>Total Price</h4></div>
                                    <div><h4>${totalPrice}</h4></div>
                                </div>
                                <div className='cart-page_check__item'>
                                    <Button fluid color='teal'>CHECK OUT</Button>
                                </div>
                                <div className='cart-page_check__item cart-page_check_item_paypal'>
                                <Image centered src="/images/paypal.png" />
                                </div>
                            </Segment>
                        </div>
                        ) : (
                            <Link to='/store' >
                                <Segment textAlign='center'>
                                    
                                        <h3>Your cart is currently empty.</h3>
                                        <Icon size='massive' name='shopping bag' />
                                            <h4>Click to start shop</h4>
                                    
                                </Segment>  
                            </Link>
                        )
                }
                
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    cart: state.shoppingCart,
    cartTotalPrice: cartTotalPrice(state.shoppingCart),
    cartTotalAmount: cartTotalAmount(state.shoppingCart)
});

export default connect(mapStateToProps)(CartPage);