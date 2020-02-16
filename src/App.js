import React from 'react'
import './App.css'
import Contacts from './pages/Contacts/Contacts'
import Login from './pages/Login/Login'
import { Switch, Route } from 'react-router-dom'

const App = () => {
    return (
        <Switch>
            <Route exact path="/" render={() => <Login />} />
            <Route exact path="/contacts" render={() => <Contacts />} />
        </Switch>
    )
}

export default App
