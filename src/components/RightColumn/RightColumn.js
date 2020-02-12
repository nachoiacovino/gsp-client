import React from 'react'
import './RightColumn.css'
import ContactGrid from '../ContactGrid/ContactGrid'
import Header from '../Header/Header'

const RightColumn = () => {
    return (
        <div className="RightColumn">
            <Header />
            <ContactGrid />
        </div>
    )
}

export default RightColumn
