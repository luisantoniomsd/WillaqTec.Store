import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';
const ProductContext = React.createContext();

class ProductProvider extends Component {

    state = {products:[],
            data: {
                categories : [],
                trends : [],
                offers: [],
                news: []
            },
            detailProduct: detailProduct, 
            detailProductFamily: {},
            cart:[], 
            modalOpen: false,
            modalProduct:detailProduct,
            cartSubTotal: 0,
            cartTaxt:0,
            cartTotal:0
        }

    componentDidMount(){
        this.setMain();
        this.setProducts();
    }

    setProducts = async ()=>{
        // let tempProducts = [];
        // storeProducts.forEach(item=>{
        //     const singleItem = {...item};
        //     tempProducts = [...tempProducts,singleItem];
        // });

        // const response = await fetch("http://store.willaqtec.com/api/v1/product/ProductFamily/ProductFamilyContent");
        const response = await fetch("http://willaqtecapistore-prod.us-east-2.elasticbeanstalk.com//api/v1/product/ProductFamily/ProductFamilyContent");
        const data = await response.json();
        const tempProducts = data;
        this.setState(()=>{
            return {products: tempProducts}
        });
    }

    setMain = async () => {
        const response = await fetch("http://willaqtecapistore-prod.us-east-2.elasticbeanstalk.com//api/v1/product/Main");
        // const response = await fetch("http://store.willaqtec.com/api/v1/product/Main");
        const data = await response.json();
        this.setState(()=>{
            return {data: data}
        })
    }

    getItem = async(productFamilyId)=>{

        const response = await fetch("http://willaqtecapistore-prod.us-east-2.elasticbeanstalk.com//api/v1/product/ProductFamily/ProductFamilyContent/"+productFamilyId);
        // const response = await fetch("http://store.willaqtec.com/api/v1/product/ProductFamily/ProductFamilyContent/"+productFamilyId);
        const data = await response.json();
        
        const productFamily = data;
        return productFamily;
    }

    handleDetail = async (productFamilyId)=>{
        const productFamily = await this.getItem(productFamilyId);
        this.setState(()=>{
            return {detailProductFamily:productFamily}
        });
    }

    addToCart = (id)=>{
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count =1;
        const price = product.price;
        product.total = price;
        this.setState(()=>{
            return {products:tempProducts, cart:[...this.state.cart,product]}
            }, ()=>{
                this.addTotals();
            }
        )
    }

    openModal = id =>{
        const product = this.getItem(id);
        this.setState(()=>{
            return {modalProduct: product, modalOpen: true};
        })
    }

    closeModal = () =>{
        this.setState(()=>{
            return {modalOpen:false}
        })
    }

    increment = (id) =>{
        let tempCart =[...this.state.cart];
        const selectedProduct =tempCart.find(item=>item.id ===id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count+1;
        product.total = product.count*product.price;

        this.setState(()=>{
            return{cart:[...tempCart]}
        },()=>{this.addTotals()})
    }

    decrement = (id) =>{
        let tempCart =[...this.state.cart];
        const selectedProduct =tempCart.find(item=>item.id ===id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count -1;
        
        if(product.count ===  0)
        {
            this.removeItem(id);
        }
        else
        {
            product.total = product.count*product.price;
            this.setState(()=>{
                return{cart:[...tempCart]}
            },()=>{this.addTotals()})
        }        
    }

    removeItem = (id) =>{
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item=>item.id !==id);

        const index = tempProducts.indexOf(this.getItem(id));

        let removedProduct = tempProducts[index];
        removedProduct.inCart  = false;
        removedProduct.count  = 0;
        removedProduct.total  = 0;

        this.setState(()=>{
            return{
                cart:[...tempCart],
                products:[...tempProducts]
            }
        },()=>{
            this.addTotals();
        })
    }

    clearCart =()=>{
        this.setState(()=>{
            return {
                cart:[]
            }
        },()=>{
            this.setProducts();
            this.addTotals();
        })
    }

    addTotals = () =>{
        let  subTotal = 0;
        this.state.cart.map(item=>{return subTotal+=item.total});
        const tempTax = parseFloat((subTotal/1.18).toFixed(2));
        const tax = subTotal - parseFloat(tempTax.toFixed(2));
        const total = subTotal
        this.setState(()=>{
            return {
                cartSubTotal:parseFloat(tempTax.toFixed(2)),
                cartTaxt:parseFloat(tax.toFixed(2)),
                cartTotal:parseFloat(total.toFixed(2))
            }
        })
    }

    render() {
        return (
            <ProductContext.Provider value ={{
                ...this.state,
                handleDetail : this.handleDetail,
                addToCart : this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem,
                clearCart:this.clearCart
            }}>

                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };