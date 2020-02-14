import React from 'react'
import placeholder from '../../assets/image-placeholder.jpg'
import './Login.css'
import useInputState from '../../hooks/useInputState'
import useToggleState from '../../hooks/useToggleState'

const Login = () => {
    const [email, setEmail] = useInputState("")
    const [password, setPassword] = useInputState("")
    const [checkbox, setCheckBox] = useToggleState()

    const handleSubmit = e => {}

    return (
        <div className="Login">
            <div className="Login-image">
                <img src={placeholder} alt="Placeholder"/>
            </div>
            <div className="Login-form">
                <div className="Login-title">
                    <h1>Contacts App</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <input className="Login-input" type="text" value={email} onChange={setEmail} placeholder="Email Address" aria-label="Email Address" />
                    <input className="Login-input" type="password" value={password} onChange={setPassword} placeholder="Password" aria-label="Password"/>
                    <label className="Login-checkbox" >
                        <input type="checkbox" value={checkbox} onChange={setCheckBox} />
                        Remember me
                    </label>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
