import React from 'react'
import './Header.css'
import SearchBar from '../SearchBar/SearchBar'

const Header = ({ selectedContact }) => {
    return (
        <div className="Header">
            {selectedContact && 
                <div className="Header-contact">
                        <img className="Header-img" src={selectedContact.avatar} alt=""/>
                        <h1 className="Header-name">
                            {selectedContact.name}
                        </h1>
                </div>
            }
            <div className="Header-search">
                <SearchBar />
            </div>
        </div>
    )
}

export default Header
