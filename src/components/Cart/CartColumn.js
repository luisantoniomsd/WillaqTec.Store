import React from 'react'

export default function CartColumn() {
    return (
        <div className='cartcolumn hidden'>
            <div className='cartcolumn-container'>
                
                <div className='cartcolumn-container__column'>
                    <p className='cartcolumn-container__column-text'>
                        producto
                    </p>
                </div>

                <div className='cartcolumn-container__column'>
                    <p className='cartcolumn-container__column-text'>
                        nombre producto
                    </p>
                </div>

                <div className='cartcolumn-container__column'>
                    <p className='cartcolumn-container__column-text'> 
                        precio
                    </p>
                </div>

                <div className='cartcolumn-container__column'>
                    <p className='cartcolumn-container__column-text'>
                        cantidad
                    </p>
                </div>

                <div className='cartcolumn-container__column'>
                    <p className='cartcolumn-container__column-text'>
                        quitar
                    </p>
                </div>

                <div className='cartcolumn-container__column'>
                    <p className='cartcolumn-container__column-text'>
                        total
                    </p>
                </div>
            </div>
        </div>
    )
}
