import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Menu from '../../assets/static/icons/Menu.png'
import PublishIcon from '../../assets/static/png/Publish.png'
import {ProductConsumer} from '../../context'

export default class DropDown extends Component {
    render() {
        return (
            <div className='dropdown'>

                <div className='dropdown-button'>
                    <button>
                        <img src={Menu}/>
                        <p>Categorias</p>
                    </button>  
                </div>

                <div className='dropdown-content'>
                    <div className='dropdown-content__items'>
                        <div className='dropdown-content__items-category'>
                            <ProductConsumer>
                                {(value)=>{
                                    return value.data.categories.map(category =>{
                                        return (
                                             <Link to={'/product/category/'+category.categoryId} key={category.categoryId}>{category.description}</Link>
                                        ) 
                                    });
                                }}
                            </ProductConsumer>
                        </div>
                        
                        <ProductConsumer>
                            {(value)=>{
                                return value.data.categories.map(category =>{
                                    return (
                                        <div className='dropdown-content__items-detail' key = {category.categoryId}>
                                            {
                                                category.categoryDetail.map( categoryDetail =>{
                                                return <Link to='/product' key = {categoryDetail.categoryDetailId}>{categoryDetail.description}</Link>
                                                })

                                            }
                                        </div> 
                                    ) 
                                });
                            }}
                        </ProductConsumer>
                        <div className='dropdown-content__items-publish'>
                            <img src={PublishIcon} alt='Publicidad'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
