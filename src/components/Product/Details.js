import React, { Component } from 'react';
import {ProductConsumer} from '../../context';
import {Link} from 'react-router-dom';
import Gallery from '../Util/Gallery'

import '../../assets/styles/Details.css'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const {productFamilyId,description,brand,specification,image,price,inCart} = value.detailProductFamily;                  
                    
                    return(
                        <div className ='detail'>
                            <div className='detail-container'>
                                {/* title */}
                                <div className='detail-container__title'>
                                    <div className='detail-container__title-text'>
                                        <h1>{description}</h1>
                                    </div>
                                </div>
                                {/* product */}
                                <div className='detail-container__product'>
                                    <div className='detail-container__product-image'>
                                        {/* <img src={DefaultPick} className='img-fluid' alt='product'></img> */}
                                        <Gallery/>
                                    </div>
                                    <div className='detail-container__product-info'>
                                        <h2>Modelo :  {description}</h2>
                                        <h4>Hecho Por :  
                                            <span className=''>
                                                {brand}
                                            </span>
                                        </h4>
                                        <h4>
                                            <strong>
                                                Precio : <span>S/ </span>{price}
                                            </strong>
                                        </h4>
                                        <p>
                                            Información del Producto :
                                        </p>
                                        <p>
                                            {specification}
                                        </p>

                                        <div className='detail-container__product-info-button'>

                                            <Link to ='/product'>
                                                <button className='orange'>
                                                    {/* <img src={StoreIcon} alt='Store'/> */}
                                                    <p>Tienda</p>
                                                </button>
                                            </Link>

                                            <button 
                                                className='gray'
                                                disabled={inCart?true:false} 
                                                onClick={()=>{
                                                    value.addToCart(productFamilyId);
                                                    value.openModal(productFamilyId);
                                                }}>
                                                    {/* {inCart?<img src={CheckIcon} alt='Check'/>:<img src={CartIcon} alt='Cart'/>} */}
                                                    {inCart}
                                                <p>{inCart?'Agregado':'Agregar al Carrito'}</p>
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
