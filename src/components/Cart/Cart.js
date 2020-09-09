import React, { Component } from 'react'
import EmptyCart from './EmptyCart'
import {ProductConsumer} from '../../context'
import CartTotals from './CartTotals'
import CartDetail from './CartDetail'
import '../../assets/styles/Cart.css'


export default class Cart extends Component {
    render() {
        return (
            <section className='cart'>
                <div className='cart-container'>
                    <ProductConsumer>
                        {value=>{
                            const {cart} =value;
                            // console.log(cart);
                            if(cart.length>0)
                            {
                                return(
                                    <React.Fragment>
                                        <CartDetail value={value}/>
                                        <CartTotals value={value} history={this.props.history}/>
                                    </React.Fragment>
                                );
                            }
                            else
                            {
                                return(
                                        <EmptyCart/>
                                )
                            }
                        }}
                    </ProductConsumer>
                </div>
            </section>
        )
    }
}
