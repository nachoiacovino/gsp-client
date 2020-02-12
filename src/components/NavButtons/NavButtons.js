import React from 'react'
import './NavButtons.css'
import Button from '../Button/Button'

const NavButtons = ({currentPage, setCurrentPage, totalPages }) => {
    const changePage = direction => {
        if (direction === "next" && currentPage < totalPages) setCurrentPage(currentPage + 1)
        else if (direction === "previous" && currentPage > 1) setCurrentPage(currentPage - 1)
    }

    return (
        <div className="NavButtons">
            <Button handleClick={() => changePage("previous")} character="<" />
            <div className="Navbuttons-pages">
                {currentPage}/{totalPages}
            </div>
            <Button handleClick={() => changePage("next")} character=">" />
        </div>
    )
}

export default NavButtons