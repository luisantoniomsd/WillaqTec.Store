import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {ProductProvider} from './context';

const container = document.getElementById('app');

ReactDOM.render(
    <ProductProvider>
            <App/>
    </ProductProvider>
, container);