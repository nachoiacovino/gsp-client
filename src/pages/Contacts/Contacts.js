import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Contacts.css'
import LeftColumn from '../../components/LeftColumn/LeftColumn'
import RightColumn from '../../components/RightColumn/RightColumn'

const Contacts = () => {
    const [contacts, setContacts] = useState([])

    const dynamicSort = property => (a, b) => a[property].localeCompare(b[property])  

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:3001/contacts")
            setContacts(res.data.sort(dynamicSort("name")))
        }
        fetchData()
    }, [])

    console.log(contacts.slice(0,3))

    return (
        <div className="Contacts">
            <LeftColumn contacts={contacts} />
            <RightColumn contacts={contacts} />
        </div>
    )
}

export default Contacts
