import React, { Component } from 'react'
import Carousel from '../Util/Carousel'
import CarouselProduct from '../Util/CarouselProduct'
import Category from '../Util/Categories'
import '../../assets/styles/Main.css'
import {ProductConsumer} from '../../context'

export default class Main extends Component {
    render() {
        return (
            <>
                <div className='main'>
                    <div className='main-container'>
                        <div className='main-container__publish'>
                            <Carousel/>
                        </div>
                        <div className='main-container__category'>
                            <div className='main-container__category-title'>
                                <div className='title'>
                                    <h2>Categorias</h2>
                                </div>
                                <div className='line'>
                                    
                                </div>
                                
                            </div>
                            <Category/>
                        </div>

                        <div className='main-container__trend'>
                            
                            <div className='main-container__trend-title'>
                                <div className='title'>
                                    <h2>Tendencias</h2>
                                </div>
                                
                                <div className='line'>
                                    
                                </div>
                                
                            </div>
                            <ProductConsumer>
                                
                                {(value)=>{
                                    return <CarouselProduct listproducts= {value.data.trends}>

                                    </CarouselProduct>
                                }}
                            </ProductConsumer>
                            
                        </div>
                        <div className='main-container__offer'>
                            <div className='main-container__offer-title'>
                                <div className='title'>
                                    <h2>Ofertas</h2>
                                </div>
                                
                                <div className='line'>
                                    
                                </div>
                                
                            </div>
                            <ProductConsumer>
                                
                                {(value)=>{
                                    return <CarouselProduct listproducts= {value.data.offers}>

                                    </CarouselProduct>
                                }}
                            </ProductConsumer>
                        </div>
                        <div className='main-container__new'>
                            <div className='main-container__new-title'>
                                <div className='title'>
                                    <h2>Novedades</h2>
                                </div>
                                
                                <div className='line'>
                                    
                                </div>
                                
                            </div>
                            <ProductConsumer>
                                
                                {(value)=>{
                                    return <CarouselProduct listproducts= {value.data.news}>

                                    </CarouselProduct>
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
