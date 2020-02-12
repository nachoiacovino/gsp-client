import React from 'react'
import './Contacts.css'
import LeftColumn from '../../components/LeftColumn/LeftColumn'
import RightColumn from '../../components/RightColumn/RightColumn'

const Contacts = ({ contacts }) => {
    return (
        <div className="Contacts">
            <LeftColumn />
            <RightColumn />
        </div>
    )
}

export default Contacts
