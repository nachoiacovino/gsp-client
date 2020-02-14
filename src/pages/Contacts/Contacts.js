import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import './Contacts.css'
import LeftColumn from '../../components/LeftColumn/LeftColumn'
import RightColumn from '../../components/RightColumn/RightColumn'

const Contacts = ({ isLoggedIn }) => {
    const [contacts, setContacts] = useState([])
    const [selectedContact, setSelectedContact] = useState([])

    useEffect(() => {
        const dynamicSort = property => (a, b) => a[property].localeCompare(b[property])  
        const fetchData = async () => {
            const res = await axios.get("http://localhost:3001/contacts")
            setContacts(res.data.sort(dynamicSort("name")))
        }
        fetchData()
    }, [])

    useEffect(() => {
        setSelectedContact(contacts[0])
    }, [contacts])

    const selectContact = id => {
        setSelectedContact(contacts.filter(contact => contact.id === id)[0])
    }

    return (
        <>
            {isLoggedIn 
                ?   <div className="Contacts">
                        <LeftColumn contacts={contacts} selectContact={selectContact} />
                        <RightColumn contacts={contacts} selectContact={selectContact} selectedContact={selectedContact} />
                    </div>
                :   <Redirect to="/" />
            }
        </>
    )
}

export default Contacts
