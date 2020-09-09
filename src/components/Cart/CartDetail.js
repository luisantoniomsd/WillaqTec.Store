import React from 'react'
import CartColumns from './CartColumn'
import CartList from './CartList'

export default function CartDetail({value}) {
    
    return (
        <div className='cartdetail'>
            <div className='cartdetail-container'>
                <div className='cartdetail-container__title'>
                    <h3>Carrito de Compras</h3>
                </div>
                <CartColumns/>
                <CartList value={value}/>
            </div>
        </div>
    )
}
