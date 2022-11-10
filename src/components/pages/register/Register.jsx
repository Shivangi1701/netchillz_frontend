import './register.scss'
import logo from '../../images/logo.png'
import { useRef, useState } from 'react'
const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailRef = useRef();
    const passwordRef = useRef();
    const handleStart = () => {
        setEmail(emailRef.current.value)
    }
    const handleFinish = () => {
        setPassword(passwordRef.current.value)
    }
    return (
        <div className='register'>
            <div className="top">
                <div className="wrapper">
                    <img
                        className='logo'
                        src={logo} alt=""
                    />
                    <button className="loginButton">Sign In</button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows and more.</h1>
                <h2>Watch in every spider-verse.</h2>
                <p>
                    ready to watch? Enter your email to create or restart your membership.
                </p>
                {!email ? (
                    <div className="input">
                        <input type="email" placeholder="email address" ref={emailRef}/>
                        <button className="registerButton" onClick={handleStart}>
                            Get Started
                        </button>
                    </div>
                ) : (
                    <form className="input">
                        <input type="password" placeholder="password" ref={passwordRef}/>
                        <button className="registerButton" onClick={handleFinish}>
                            Start
                        </button>
                    </form>
                )}
            </div>
        </div>
    )
}

export default Register