import React from 'react'
import './Header.css'
import SearchBar from '../SearchBar/SearchBar'

const Header = () => {
    return (
        <div className="Header">
            <div className="Header-contact">
                <img className="Header-img" src="https://s3.amazonaws.com/uifaces/faces/twitter/dvdwinden/128.jpg" alt=""/>
                <h1 className="Header-name">
                    Verokina O'Gallagher
                </h1>
            </div>
            <div className="Header-search">
                <SearchBar />
            </div>
        </div>
    )
}

export default Header
