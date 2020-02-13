import React, { useState, useEffect } from 'react'
import './RightColumn.css'
import ContactGrid from '../ContactGrid/ContactGrid'
import Header from '../Header/Header'

const RightColumn = ({ contacts }) => {
    const [selectedContact, setSelectedContact] = useState([])

    useEffect(() => {
        setSelectedContact(contacts[0])
    }, [contacts])
    
    console.log("selected contact", selectedContact)
    // console.log("contacts right column", contacts)


    return (
        <div className="RightColumn">
            <Header selectedContact={selectedContact} />
            <ContactGrid contacts={contacts} />
        </div>
    )
}

export default RightColumn
