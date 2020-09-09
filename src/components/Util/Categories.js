import React, { Component } from 'react'
import {ProductConsumer} from '../../context'
import '../../assets/styles/Categories.css'

export default class Categories extends Component {
    render() {
        return (
        <section className="categories">
            <div className="categories__container">
                <ProductConsumer>
                            {(value)=>{
                                return value.data.categories.map(category =>{
                                    return (
                                        <div className='categories__container-item' key={category.categoryId}>
                                            <div className='categories__container-item-image' >
                                                <img src={"https://20602631029.s3.us-east-2.amazonaws.com/Image/Category/"+category.image} alt={category.description}/>
                                            </div>
                                            <div className='categories__container-item-description'>
                                                {category.description}
                                            </div>
                                        </div>
                                    ) 
                                });
                            }}
                </ProductConsumer>
            </div>
        </section>
        )
    }
}
