import React, { Component } from 'react'
import ProductItem from './ProductItem'
import {ProductConsumer} from '../../context'
import '../../assets/styles/Product.css'

export default class Product extends Component {
    render() {
        return (
            <div className='product'>
                <div className='product-container'>
                    <div className='product-container__title'>
                        <h3>Listado de Productos</h3>
                    </div>
                    <div className='product-container__article'>
                        <ProductConsumer>
                            {(value)=>{
                                return value.products.map(product =>{
                                    return <ProductItem key={product.productFamilyId} product={product}>

                                    </ProductItem> 
                                });
                            }}
                        </ProductConsumer>
                    </div>
                </div>
            </div>
        )
    }
}
