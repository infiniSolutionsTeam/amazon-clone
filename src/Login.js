import React,{useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase';
import './Login.css'

function Login() {

    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();
        auth.
            signInWithEmailAndPassword(email,password)
            .then(auth=>{
                history.push('/');
            })
            .catch(err=>alert(err.message))
    }


    const register = e=>{
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                // console.log(auth)
                if(auth){
                    history.push("/");
                }

            }).catch(err=>alert(err.message))
        //firebase register
    }

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
                    <input type="text" value={email} onChange={e=>setEmail(e.target.value)} />

                    <h5>
                        Password

                    </h5>
                    <input type="Password" value={password} onChange={e=>setPassword(e.target.value)} />
                    <button type="submit" className="login__signInBtn" onClick={signIn}>Sign In</button>
                </form>
                <button onClick={register} className="login__registerBtn">Create Amazon Account</button>
                <p>Hey Hurry...</p>
            </div>
        </div>
    )
}

export default Login
