import React, { Component } from 'react'
import '../../assets/styles/Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <div className='footer-container'>

                    <div className='footer-container__content'>

                        <div className='footer-container__content-column'>
                            <p>Servicio al Cliente</p>
                            <ul>
                                <li>Seguimiento de su Pedido</li>
                                <li>Comprobantes Electronicos</li>
                                <li>Preguntas Frecuentes</li>
                                <li>Formas de pago</li>
                            </ul>
                        </div>

                        <div className='footer-container__content-column'>
                            <p>Más de Seguridad</p>
                            <ul>
                                <li>Más de Seguridad</li>
                                <li>Nuestra Empresa</li>
                            </ul>
                        </div>

                        <div className='footer-container__content-column'>
                            <p>Empresas Relacionadas</p>
                            <ul>
                                <li>WillaqTec</li>
                                <li>Sirsaf</li>
                            </ul>
                        </div>

                        <div className='footer-container__content-column'>
                            <p>Libro de Reclamaciones</p>
                        </div>

                    </div>

                    <div className='footer-container__footer'>
                        WillaqTec SAC 2020 &copy; Todos los Derechos Reservados
                    </div>
                    
                </div>
            </footer>
        )
    }
}
