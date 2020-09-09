import React, { Component } from 'react'
import {ProductConsumer} from '../../context';
import {Link} from 'react-router-dom';
import CartIcon from '../../assets/static/icons/Cart.png'
import StoreIcon from '../../assets/static/icons/Store.png'
import DefaultPick from '../../assets/static/png/Default.png'
import '../../assets/styles/Modal.css'

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const {modalOpen,closeModal} = value;
                    const {img, title, price} = value.modalProduct;
                    
                    if(!modalOpen)
                    {
                        return null;
                    }
                    else{
                        return (
                            <div className='modal'>
                                <div className='modal-container'>
                                    <div className='modal-container__row'>
                                        <div id = 'modal' className = 'modal-container__row-center'>
                                            <h5>Articulo agregado al carro</h5>
                                            <img src={DefaultPick} className ='img-fluid' alt='product'/>
                                            <h5>{title}</h5>
                                            <h5>Precio : S/ {price}</h5>
                                            <Link to='/product'>
                                                <button className='orange' onClick={()=>{closeModal()}}>
                                                    {/* <img src={StoreIcon} alt='Store'/> */}
                                                    Tienda
                                                </button>
                                            </Link>
                                            <Link to='/cart'>
                                                <button className='gray' onClick={()=>{closeModal()}}>
                                                    {/* <img src={CartIcon} alt='Cart'/> */}
                                                    Carrito
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );                        
                    }

                }}
            </ProductConsumer>
        )
    }
}
