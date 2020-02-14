import React, { useState } from 'react'
import './App.css'
import Contacts from './pages/Contacts/Contacts'
import Login from './pages/Login/Login'
import { Switch, Route } from 'react-router-dom'

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <Switch>
            <Route exact path="/" render={() => <Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route exact path="/contacts" render={() => <Contacts isLoggedIn={isLoggedIn} />} />
        </Switch>
    )
}

export default App
