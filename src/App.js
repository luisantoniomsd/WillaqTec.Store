import AppC from './components/App';
import {ProductProvider} from './context';

import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <ProductProvider>
                <AppC/>
            </ProductProvider>
        )
    }
}
