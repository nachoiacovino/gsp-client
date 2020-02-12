import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Contacts from './pages/Contacts/Contacts'

const App = () => {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:3001/contacts")
            setContacts(res.data)
        }
        fetchData()
    }, [])

    console.log(contacts.slice(0,3))

    return (
        <div>
            <Contacts contacts={contacts} />
        </div>
    )
}

export default App
