import './login.scss'
import logo from '../../images/logo.png'
const Login = () => {
    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img
                        className='logo'
                        src={logo} alt=""
                    />
                </div>
            </div>
            <div className="container">
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="email address" />
                    <input type="password" placeholder="password" />
                    <button className="loginButton">Sign In</button>
                    <span>New to NETCHILLZ ? <b>Sign Up Now</b></span>
                    <small>This page is protected by 
                        Google reCAPTCHA to ensure 
                        you're not a bot <b>Learn More</b>
                    </small>
                </form>
            </div>
        </div>
    )
}

export default Login