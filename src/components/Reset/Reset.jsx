import React from 'react'
import './Reset.css'
import { Link } from 'react-router-dom'
import './Reset.css';


const Reset = () => {
  return (
    <form className='reset--form'>
        <input className='form--input' placeholder='email' type='email' />
        <button className='reset--form__btn' type='submit'>Reset code</button>
        <div className='form--container'>
            <p>Back to login</p>
            <Link to='/login'>Login</Link>
        </div>
    </form>
  )
}

export default Reset
