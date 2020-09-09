import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../../context'
import CheckIcon from '../../assets/static/icons/Check.png'
import CartIcon from '../../assets/static/icons/Cart.png'
import '../../assets/styles/ProductItem.css'
import PropTypes from 'prop-types';

export default class ProductItem extends Component {
    render() {
        const {productFamilyId, description, path,image, price, inCart}  = this.props.product;
        return (
            <div className='productitem'> 
                <div className='productitem-container'>
                    <div className='productitem-container__content'>
                        <ProductConsumer>
                            {(value)=>(
                                <div className='productitem-container__content-image' onClick={()=> value.handleDetail(productFamilyId)}>
                                    <Link to='/details'>
                                        <img src={path+image} alt='product'/>
                                        {/* <img src={DefaultPick} alt='product'/> */}
                                    </Link>
                                    <button 
                                        className='productitem-container__content-button' 
                                        disabled={inCart?true:false} 
                                        onClick={()=>{
                                            value.addToCart(productFamilyId);                                            
                                            value.openModal(productFamilyId);
                                        }}>
                                        
                                        {inCart?(<p disabled><img className='icon' src={CheckIcon} alt ='check'/></p>):(<p><img className='icon' src={CartIcon} alt='cart'/></p>)}
                                    </button>
                                </div>

                            )}
                        </ProductConsumer>
                    </div>
                    
                    <div className='productitem-container__footer'>
                        <p className='productitem-container__footer-title'>
                            {description}
                        </p>
                        <h5 className='productitem-container__footer-price'>
                            <p>
                                <span>S/ </span>
                                {price}
                            </p>
                            
                        </h5>
                    </div>
                </div>
            </div>
        )
    }
}

ProductItem.propTypes ={
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    })
}