import React, { Component } from 'react';
import MainHeader from './MainHeader';
import SubHeader from './SubHeader';

import '../../assets/styles/Header.css';
import '../../assets/styles/DropDown.css';

export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <MainHeader/>
                <SubHeader/>
            </React.Fragment>
        )
    }
}
