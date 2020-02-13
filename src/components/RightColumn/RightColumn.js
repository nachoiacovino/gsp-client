import React from 'react'
import './RightColumn.css'
import ContactGrid from '../ContactGrid/ContactGrid'
import Header from '../Header/Header'

const RightColumn = ({ contacts }) => {
    return (
        <div className="RightColumn">
            <Header />
            <ContactGrid contacts={contacts} />
        </div>
    )
}

export default RightColumn
