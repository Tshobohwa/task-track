import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className='home--page__wripper'>
    <div className='home--page'>
        <h2 className='welcome--message'>Welcome to</h2>
        <h1 className='home--page__title'>Task-track</h1>
        <p>An easy and simple way <br/> to track your tasks progress</p>
        <div className='home--links__container'>
            <Link to='/login'> <span className='login--link'>Log in</span></Link>
            <Link to='/sign_up'><span className='signup--link'>Sign up</span> </Link>
        </div>
        <Link to='/projects'>Try demo</Link>
    </div>
    </div>
  )
}

export default Home
