import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import placeholder from '../../assets/image-placeholder.jpg'
import './Login.css'
import useInputState from '../../hooks/useInputState'
import useToggleState from '../../hooks/useToggleState'

const Login = ({ history, setIsLoggedIn }) => {
    const [email, setEmail, resetEmail] = useInputState("")
    const [password, setPassword, resetPassword] = useInputState("")
    const [checkbox, setCheckBox] = useToggleState()
    const [status, setStatus] = useState("")
    const emailRef = useRef()

    useEffect(() => {
        emailRef.current.focus()
    }, [])
    
    const handleSubmit = e => {
        e.preventDefault()
        const handleLogin = async () => {
            const res = await axios.post("http://localhost:3001/login", { email, password })
            setStatus(res.data)
        }
        handleLogin()
        resetEmail()
        resetPassword()
        setCheckBox(false)
    }

    useEffect(() => {
        if (status === "success") {
            setIsLoggedIn(true)
            history.push("/contacts")
        }
        else if (status === "error") emailRef.current.focus()
    }, [status, history])

    return (
        <div className="Login">
            <div className="Login-image">
                <img src={placeholder} alt="Placeholder"/>
            </div>
            <div className="Login-form">
                <div className="Login-info info">
                    Email: contacts@app.com. Password: password. 
                </div>
                <div className="Login-title">
                    <h1>Contacts App</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <input className="Login-input" type="text" value={email} onChange={setEmail} placeholder="Email Address" aria-label="Email Address" ref={emailRef} />
                    <input className="Login-input" type="password" value={password} onChange={setPassword} placeholder="Password" aria-label="Password"/>
                    <label className="Login-checkbox" >
                        <input type="checkbox" value={checkbox} onChange={setCheckBox} />
                        Remember me
                    </label>
                    <button type="submit">Login</button>
                </form>
                    <div className={`Login-info ${status === "error" && "error"}`}>
                    {status === "error" &&
                        "Incorrect username/password. Please try again."
                    }
                    </div>
            </div>
        </div>
    );
}

export default withRouter(Login)
