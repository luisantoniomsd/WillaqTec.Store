import React from 'react'
import {Link} from 'react-router-dom'
import '../../assets/styles/SubMenu.css'

export default function SubHeader() {
    return (
        <header className='subheader'>
            <div className='subheader-container'>
                <nav className='subheader-container__nav'>
                    <div>
                        <Link to='/'>Ofertas</Link>
                    </div>
                    <div>
                        <Link to='/'>Novedades</Link>
                    </div>
                    <div>
                        <Link to='/bill'>Facturaci&oacute;n</Link>
                    </div>
                    <div>
                        <Link to='/store'>Tiendas</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}
