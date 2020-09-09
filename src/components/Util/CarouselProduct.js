import React, { Component } from 'react'
import '../../assets/styles/CarouselProduct.css'
import {ProductConsumer} from '../../context'
import ProductItem from '../Product/ProductItem'
export default class CarouselProduct extends Component {
    render() {
        const products = this.props.listproducts;
        return (
            <section className="carouselproduct">
            <div className="carouselproduct__container">
                {/* <ProductConsumer> */}
                            {/* {(value)=>{ */}
                                {
                                    products.map(product =>{
                                        return <ProductItem key={product.productFamilyId} product={product}>

                                        </ProductItem> 
                                    })
                                }
                            {/* }} */}
                {/* </ProductConsumer> */}
            </div>
        </section>
        )
    }
}
