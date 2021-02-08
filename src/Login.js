import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG6.png" alt="Source Image" />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>
                        E-mail

                    </h5>
                    <input type="text"/>

                    <h5>
                        Password

                    </h5>
                    <input type="Password"/>
                    <button className="login__signInBtn">Sign In</button>
                </form>
                <button className="login__registerBtn">Create Amazon Account</button>
                <p>Hey Hurry...</p>
            </div>
        </div>
    )
}

export default Login
