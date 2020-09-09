import React, { Component } from 'react'
import ProductItem from './ProductItem'
import Loader from '../Util/Loader'
import {ProductConsumer} from '../../context'
import '../../assets/styles/Product.css'

export default class ProductCategory extends Component {
    state = {
        loading: false,
        error: null,
        products:[]
    }

    componentDidMount(){
        this.setProducts();
    }

    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.id !== this.props.match.params.id)
        {
            this.setProducts();
        }
    }

    componentWillUnmount(){
        
    }

    setProducts = async() => {
        this.setState({loading:true, error: null});
        const { match: { params } } = this.props;

        try {
            const response = await fetch("http://store.willaqtec.com/api/v1/product/ProductFamily/ProductFamilyContentByCategoryId/"+params.id);
            const data = await response.json();
            const tempProducts = data;
            this.setState(()=>{
                return { loading:false,products: tempProducts}
            });
        } catch (error) {
            this.setState({loading:false, error: error});
        }
    }

    render() {

        if(this.state.loading === true)
        {
            return <Loader/>
        }

        if(this.state.error)
        {
            return `Error: ${this.state.error.message}`;
        }

        return (
            <div className='product'>
                <div className='product-container'>
                    <div className='product-container__title'>
                        <h3>Listado de Productos</h3>
                    </div>
                    <div className='product-container__article'>

                            {this.state.products.map(product =>{
                                    return <ProductItem key={product.productFamilyId} product={product}>

                                    </ProductItem> 
                                })
                            }

                    </div>
                </div>
            </div>
        )
    }
}
