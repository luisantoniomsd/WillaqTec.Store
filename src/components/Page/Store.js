import React, { Component } from 'react'
import Maps from '../Util/GoogleMap'
import '../../assets/styles/Store.css'

export default class Store extends Component {
    render() {
        return (
            <div className ='store'>
                <div className='store-container'>
                    <div className='store-container__place'>
                        <Maps/>
                    </div>
                    <div className='store-container__text'>
                        <div className='store-container__text-title'>
                            <p>En la Ciudad de Tacna</p>
                        </div>
                        <div className='store-container__text-specification'>
                            <p className='specification-item'> 
                                <span className='specification-item__feature'>Ubicanos en : </span> 
                                <span className='specification-item__value'>Av. Patricio Melendes 1054-A</span>
                            </p>
                            <p className='specification-item'> 
                                <span className='specification-item__feature'>Horario de Atenci&oacute;n : </span>
                                <span className='specification-item__value'>08:00 AM - 19:00 PM</span> 
                            </p>
                            <p className='specification-item'> 
                                <span className='specification-item__feature'>Llamanos al Numero : </span>
                                <span className='specification-item__value'>052 - 609350 / 955014552</span>
                            </p>
                            <p className='specification-item'> 
                            <span className='specification-item__feature'>Escribenos al correo : </span>
                                <span className='specification-item__value'>segurimas.peru@hotmail.com</span>
                            </p>
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
}
