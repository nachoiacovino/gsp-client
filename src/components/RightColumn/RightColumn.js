import React from 'react'
import './RightColumn.css'
import ContactGrid from '../ContactGrid/ContactGrid'
import Header from '../Header/Header'

const RightColumn = ({ contacts, selectedContact }) => {
    return (
        <div className="RightColumn">
            <Header selectedContact={selectedContact} />
            <ContactGrid contacts={contacts} selectedContact={selectedContact} />
        </div>
    )
}

export default RightColumn
