import './Login.css'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'
import { useState } from 'react'
const Login = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(
            login({
                name,
                email,
                password,
                loggedIn: true,
            })
        )
    }

    return (
        <div className="login" onSubmit={(e) => handleSubmit(e)}>
            <form className="login__form">
                <h1>Login here 🚀</h1>
                <input
                    type="name"
                    placeholder="type your name "
                    value={name}
                    onChange={handleNameChange}
                />
                <input
                    type="email"
                    placeholder="type your email"
                    value={email}
                    onChange={handleEmailChange}
                />
                <input
                    type="password"
                    placeholder="type your password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <button type="submit" className="submit__btn">
                    Submit 🍾
                </button>
            </form>
        </div>
    )
}

export default Login
