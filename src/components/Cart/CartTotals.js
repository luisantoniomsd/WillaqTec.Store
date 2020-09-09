import React from 'react';
import {Link} from 'react-router-dom';
import { CulqiProvider, Culqi } from "react-culqi";
import logo from '../../assets/static/Logo.png'


export default function CartTotals({value, history}) {

    const {cartSubTotal, cartTaxt,cartTotal,clearCart} = value;
    return (
        <React.Fragment>
            <div className='total'>
                <div className='total-container'>
                    <div className='total-container__sumary'>
                        <div className='sumary'>
                            <div className='sumary-clear'>
                                <Link to='/'>
                                    <button type='button' className='sumary-button' onClick={()=>{clearCart()}}>
                                        <span className='sumary-button__icon'>
                                            {/* <FontAwesomeIcon icon={faTrash}/> */}
                                        </span>
                                        <span className='sumary-button__text'>
                                            Limpiar Carrito
                                        </span>
                                    </button>
                                </Link>
                            </div>
                            <div className='sumary-detail'>
                                <h3 className='sumary-detail__title'>Resumen de tu Pedido</h3>
                                {/* <h5 className='sumary-detail__text'>
                                    <span>
                                        Sub Total :
                                    </span>
                                    <strong>S/ {cartSubTotal}</strong>
                                </h5>

                                <h5 className='sumary-detail__text'>
                                    <span>
                                        IGV (18%) :
                                    </span>
                                    <strong>S/ {cartTaxt}</strong>
                                </h5> */}

                                <h5 className='sumary-detail__text'>
                                    <span>
                                        Sub Total :
                                    </span>
                                    <strong className='sumary-detail__text-red'>
                                        S/ {cartTotal}
                                    </strong>
                                </h5> 

                                <h5 className='sumary-detail__text'>
                                    <span>
                                        Envio :
                                    </span>
                                    <strong className='sumary-detail__text-green'>
                                        Gratis
                                    </strong>
                                </h5>  

                                <h5 className='sumary-detail__text'>
                                    <span>
                                        Total :
                                    </span>
                                    <strong className='sumary-detail__text-red'>
                                       <h2>S/ {cartTotal}</h2> 
                                    </strong>
                                </h5> 

                            </div>

                            

                            <div className="sumary-payment">
                                <CulqiProvider
                                    publicKey="pk_test_71e40b30ff6eed2e"
                                    amount={cartTotal*100}
                                    title="Segurimas Perú"
                                    description="Seguridad Industrial"
                                    onToken={token => {
                                    console.log("token received", token);
                                    }}
                                    onError={error => {
                                    console.error("something bad happened", error);
                                    }}
                                    // Uncomment `options` to see customizations take place
                                    options={{
                                    style: {
                                        maincolor: "red",
                                        buttontext: "dark",
                                        maintext: "dark",
                                        desctext: "gray",
                                        logo: logo
                                    }
                                    }}
                                >
                                    <div>
                                    <Culqi>
                                        {({ openCulqi, setAmount, amount }) => {
                                        
                                            return (
                                                <div>
                                                {/* <h3>Amount to pay: {cartTotal}</h3> */}
                                                    <button onClick={openCulqi} className='sumary-button'>
                                                        <span className='sumary-button__icon'>
                                                            {/* <FontAwesomeIcon icon={faCreditCard}/> */}
                                                        </span>
                                                        <span className='sumary-button__text'>
                                                            Procesar Compra
                                                        </span>
                                                        
                                                    </button>
                                                </div>
                                            );
                                        }}
                                    </Culqi>
                                    </div>
                                </CulqiProvider>
                            </div>
                        </div>

                        <div className='sumary-information'>
                            <Link to='/' className='sumary-informacion__link'>
                                <span>
                                    {/* <FontAwesomeIcon icon={faPhoneAlt}/> */}
                                </span>
                                Asesoria Tel&eacute;fonica
                            </Link>
                            <Link to='/' className='sumary-informacion__link'>
                                <span>
                                    {/* <FontAwesomeIcon icon={faBox}/> */}
                                </span>
                                Rastrea tu pedido
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
        
    )
}
