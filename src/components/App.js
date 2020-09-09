import React from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import '../assets/styles/App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Product from './Product/Product'
import ProductCategory from './Product/ProductCategory'
import Details from './Product/Details'
import Modal from './Product/Modal'
import Cart from './Cart/Cart'
import Informative from './Page/Informative'
import Store from './Page/Store'
import Footer from './Footer/Footer';
import Default from './Default';

function App () {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path ='/' component={Main}/>
                <Route exact path ='/product' component={Product}/>
                <Route exact path ='/product/category/:id' component={ProductCategory}/>
                <Route exact path ='/details' component={Details}/>
                <Route exact path ='/cart' component={Cart}/>
                <Route exact path ='/informative' component={Informative}/>
                <Route exact path ='/store' component={Store}/>
                <Route component={Default}/>
            </Switch>
            <Footer/>
            <Modal/>
        </BrowserRouter>
    )
}
export default App;