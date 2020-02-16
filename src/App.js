import React, { useState } from 'react'
import './App.css'
import Contacts from './pages/Contacts/Contacts'
import Login from './pages/Login/Login'
import { Switch, Route } from 'react-router-dom'

const App = () => {
    const [token, setToken] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    return (
        <Switch>
            <Route exact path="/" render={() => <Login setIsLoggedIn={setIsLoggedIn} setToken={setToken} />} />
            <Route exact path="/contacts" render={() => <Contacts isLoggedIn={isLoggedIn} token={token} />} />
        </Switch>
    )
}

export default App
