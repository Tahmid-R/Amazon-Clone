import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase';

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //firebase has built in auth functions
    const login = (event) => {
        event.preventDefault(); //prevents refresh
        
        auth
        .signInWithEmailAndPassword(email,password)
        .then((auth) => {
            //logged in, redirect to homepage...
            navigate("/");
        })
        .catch((e) => alert(e.message));
    }

    const register = (event) => {
        event.preventDefault(); //prevents refresh

        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            //created user and logged in...redirect
            navigate("/");
        })
        .catch((e) => alert(e.message));
    }



  return (
    <div className="login">

        <Link to="/">

        <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png" alt=""/>

        </Link>
        
        <div className="login__container">


        {/*The email/password is always mapped at blank (useState(" blank"))
        an onChange will listen to every key and set the email into the email value */}
        
        <h1>Sign Up</h1>
        <form>
            <h5>Email</h5>
            <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
            <h5>Password</h5>
            <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
            <button onClick={login} type="submit" className="login__containerSign">Sign In</button>
        </form>
        <p>By signing-in you agree to Amazon's Conditions of Use & Sale.
            Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>
        <button onClick={register} className="login__containerRegister">Create your Amazon Account</button>

        </div>
        
        
    </div>
  )
}

export default Login