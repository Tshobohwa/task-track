import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css';

const Login = () => {
  return (
        <form className="login--form">
            <input className="form--input" placeholder="Email" type="email" />
            <input className="form--input" placeholder="password" type="password" />
            <div className="check--box__container">
                <input type="checkbox" className="login--form__checkbox" />
                <p className="checkbox--comment">Keep me loged in?</p>
            </div>
            <button className="login--form__btn" type="submit">Log in</button>
            <div className="sign--up__container">
                <p>Don't have an account?</p>
                <Link className='login--link' to='/sign_up'>Sign Up</Link>
            </div>
            <div className='form--container'>
                <p>Forgot your password?</p>
                <Link to='/reset_password'>Reset</Link>
            </div>
        </form>
  )
}

export default Login
