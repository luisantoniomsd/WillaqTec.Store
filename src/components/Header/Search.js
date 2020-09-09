import React, { Component } from 'react'
import SearchIcon from '../../assets/static/icons/Search.png'
import '../../assets/styles/Search.css'

export default class Search extends Component {
    render() {
        return (
            <div className='search'>
                <input type='text' className='search-text__input' placeholder='Busqueda . . .'></input>
                <button className='search-button__button'>
                    <img src={SearchIcon} alt='Search'/>
                </button>
            </div>
        )
    }
}
