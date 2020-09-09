import React from 'react'
import {Link} from 'react-router-dom'
import DropDown from './DropDown'
import Search from './Search'
import LogotipoIcon from '../../assets/static/Logo.png'
import PersonIcon from '../../assets/static/icons/Person.png'
import TransportIcon from '../../assets/static/icons/Transport.png'
import CartIcon from '../../assets/static/icons/Cart.png'

export default function MainHeader() {
    return (
        <header className='header'>
            <div className = 'header-container'>
                <div className='header-container__menu'>
                    <DropDown/>
                </div>
                <div className='header-container__logo'>    
                    <Link to='/'>
                        <img src={LogotipoIcon} alt='Segurimas Perú'/>
                    </Link>                
                </div>
                <div className='header-container__buscador'>
                    <Search/>
                </div>
                <div className='header-container__account'>
                    <div className='account-icon'>
                        <Link to='/cart' className='account-icon__cart'>
                            <button>
                                <img src={CartIcon} alt='Cart'/>
                            </button>
                        </Link>
                    </div>

                    <div className='account-separator hidden'></div>

                    <div className='account-icon hidden'>
                        <Link to='/transport' className='account-icon__transport'>
                            <button>
                                <img src={TransportIcon} alt='Transport'/>
                            </button>
                        </Link>
                    </div>

                    <div className='account-separator hidden'></div>

                    <div className='account-icon hidden'>
                        <Link to='/account' className='account-icon__user'>
                            <button>
                                <img src={PersonIcon} alt='Person'/>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
