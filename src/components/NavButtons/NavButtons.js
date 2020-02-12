import React from 'react'
import './NavButtons.css'
import Button from '../Button/Button'

const NavButtons = ({ prevPage, nextPage, currentPage, totalPages }) => {
    return (
        <div className="NavButtons">
            <Button character="<" />
            <div className="Navbuttons-pages">
                1/3
            </div>
            <Button character=">" />

        </div>
    )
}

export default NavButtons