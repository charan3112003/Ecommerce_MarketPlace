import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        // Firebase login
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/');
                }
            })
            .catch((error) => alert(error.message));
    };

    const register = (e) => {
        e.preventDefault();
        // Firebase register
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if (auth) {
                    history.push('/');
                }
            })
            .catch((error) => alert(error.message));
    };

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://static.javatpoint.com/company/images/rcm-company.png'
                    alt=''
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>
                <form>
                    <h4>E-mail</h4>
                    <input
                        type='text'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <h4>Password</h4>
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type='submit'
                        onClick={signIn}
                        className='login__signInButton'
                    >
                        Sign In
                    </button>
                </form>
                <p>
                    By signing-in you agree to Rcm Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice, and our Interest-Based Ads Notice.
                </p>
                <button
                    onClick={register}
                    className='login__registerButton'
                >
                    Create your Rcm Account
                </button>
            </div>
        </div>
    );
}

export default Login;
