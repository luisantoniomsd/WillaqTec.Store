import React from 'react'
import CartEmptyIcon from '../../assets/static/png/CartEmpty.png'
import '../../assets/styles/CartEmpty.css'

export default function EmptyCart() {
    return (
        <div className='cart-container__empty'>
            <div className='cart-container__empty-value'>
                <img src={CartEmptyIcon} alr='Cart Empty' />
                <h1>
                    Su carrito esta vacio
                </h1>
            </div>
        </div>
    )
}
