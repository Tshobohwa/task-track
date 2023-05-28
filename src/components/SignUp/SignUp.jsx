import React from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
        <form className="signup--form">
            <input className="form--input" placeholder="Email" type="email" />
            <input className="form--input" placeholder="Username" type="text" />
            <input className="form--input" placeholder="Password" type="password" />
            <input className="form--input" placeholder="Confirm password" type="password" />
            <div className="check--box__container">
                <input type="checkbox" className="login--form__checkbox" />
                <p className="checkbox--comment">Keep me loged in?</p>
            </div>
            <button className="login--form__btn" type="submit">Sign up</button>
            <div className="sign--up__container">
                <p>Already have an account?</p>
                <Link to='/login'>Login</Link>
            </div>
        </form>
  )
}

export default SignUp
