import React from 'react'
import Default from '../../assets/static/png/Default.png'

export default function CartItem({item, value}) {
    const {id,title,img,price,total,count} = item;
    const {increment, decrement, removeItem} = value;
    return (
        <div className='cartitem'>
            <div className='cartitem-container'>
                <div className='cartitem-container__column img-field'>
                    <img className='' src={Default}  alt='product'/>
                </div>
                
                <div className='cartitem-container__column name-field'>
                    <span className='cartitem-container__column-hidden'>product :</span> {title}
                </div>
                
                <div className='cartitem-container__column price-field'>
                    <span className='cartitem-container__column-hidden'>price :</span> {price}
                </div>

                <div className='cartitem-container__column quantity-field'>
                    <div className='cartitem-container__column-quantity'>
                        <span className='btn-black' onClick={()=>{decrement(id)}}>
                            {/* <FontAwesomeIcon icon={faChevronLeft}/> */}
                        </span>

                        <span className='btn-black'>{count}</span>

                        <span className='btn-black' onClick={()=>{increment(id)}}>
                            {/* <FontAwesomeIcon icon={faChevronRight}/> */}
                        </span>
                    </div>
                </div>

                <div className='cartitem-container__column remove-field'>
                    <div className='cartitem-icon' onClick={()=>removeItem(id)}>
                        {/* <FontAwesomeIcon icon={faTrash}/> */}
                        <button type='button'>Eliminar</button>
                    </div>
                </div>

                <div className='cartitem-container__column hidden'>
                    <span className='cartitem-container__column-hidden'>item total : S/</span>
                    <strong>{total}</strong>
                    
                </div>
            </div>
            
        </div>
    )
}
